const customprefix = require('../schemas/prefix');
const userban = require('../schemas/userBan');
const { PREFIX } = require('../config.json')
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const { MessageEmbed, Permissions } = require("discord.js")

module.exports = {
	name: 'messageCreate',
	async execute(message) {

        if (message.author.bot) return;

        const profile = await userban.findOne({
            userID: message.author.id
        })
        if(message.author.id !== "199530973023567872" && profile) return;
    
        const data = await customprefix.findOne({
            GuildID: message.guild.id
        });
    
        const prefix = (() => {
            if (!data)
              return PREFIX
            else if(data)
              return data.Prefix
          })();    

          if(message.content === `<@!${message.client.user.id}>` || message.content === `<@${message.client.user.id}>`){
            const embed = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(`My prefix is \`${prefix}\``)
            return message.channel.send({embeds: [embed]});
        }
	    const prefixRegex = new RegExp(`^(<@!?${message.client.user.id}>|${escapeRegex(prefix)})\\s*`)        
        if (prefixRegex.test(message.content)) {

            const [, matchedPrefix] = message.content.match(prefixRegex);
            const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();
    
            const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
            if(!command) return;

            let canSend = false 
            let canEmbed = false
            if(message.channel.permissionsFor(message.client.user.id).has(Permissions.FLAGS.SEND_MESSAGES) === true || message.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES) === true ){
                canSend = true
            }
            if(message.channel.permissionsFor(message.client.user.id).has(Permissions.FLAGS.EMBED_LINKS) === true || message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS) === true ){
                canEmbed = true
            }

            if(canSend === true && message.channel.permissionsFor(message.client.user.id).has(Permissions.FLAGS.SEND_MESSAGES) !== false){

                if(canEmbed === true && message.channel.permissionsFor(message.client.user.id).has(Permissions.FLAGS.EMBED_LINKS) !== false){
                    try {   
                        command.execute(message, args);
                    } catch (error) {
                        console.error(error);
                    }
                } else{
                    message.channel.send({ content: `ERROR: Missing permission \`EMBED_LINKS\``})
                }
            }
    
        }

	}
};