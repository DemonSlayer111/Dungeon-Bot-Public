const prefixModel = require("../../schemas/prefix")
const { MessageEmbed, Permissions } = require('discord.js');
module.exports = {
	name: 'setprefix',
	description: 'Change bot prefix.',
	async execute(message, args) {

    if (message.author.id !== "199530973023567872" && !message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;


    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });

    const newEmbed = new MessageEmbed()
    .setColor('#0e48b8')
    .setDescription('Please provide a **new prefix**.')

    const newEmbed1 = new MessageEmbed()
    .setColor('#0e48b8')
    .setDescription(`Set the prefix to **\`${args[0]}\`**`)




    if (!args[0]) return message.channel.send({embeds: [newEmbed]});

    if (data) {
        
        if(args[0] === "?"){
            await prefixModel.findOneAndRemove({
                GuildID: message.guild.id
        })
        }
        else{
        await prefixModel.findOneAndUpdate({
            GuildID: message.guild.id
        },{
            Prefix: args[0],
            GuildID: message.guild.id

        })
    }
        
        message.channel.send({embeds: [newEmbed1]});


    } else if (!data) {
        message.channel.send({embeds: [newEmbed1]});

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    }

	},
};