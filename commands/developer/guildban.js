const Discord = require("discord.js");
const guildban = require("../../schemas/guildBan");
module.exports = {
	name: 'guildban',
    aliases: ['killguild'],
	description: 'Ban a guild from using the bot.',
	async execute(message, args) {
        if (message.author.id !== "199530973023567872") return;



        const bannedUserEmbed = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('I have left that server and can no longer be added to it.')
        const guild = message.client.guilds.cache.get(args[0]);
    
        if(!guild) return;
    
        if(guild){
            guild.leave()
            message.channel.send({embeds: [bannedUserEmbed]})
        }
        const reason = args.length > 1 ? args.slice(1).join(" ") : "No reason provided.";
        let bannedGuild = await new guildban({
            GuildID: guild.id,
            reason: reason
        })
    
        bannedGuild.save();
	},
};