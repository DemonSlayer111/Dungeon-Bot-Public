const Discord = require("discord.js");
const userban = require('../../schemas/userBan')
module.exports = {
	name: 'userban',
    aliases: ['killuser'],
	description: 'Ban a user from using the bot',
	async execute(message, args) {
        if (message.author.id !== "199530973023567872") return;

        const bannedUserEmbed = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('This user can no longer use commands.')
        if(!args[0]) return;
        const mentionedMember = await message.client.users.fetch(`${args[0].match(/\d+/)?.join("")}`).catch(e => {});

        if(!mentionedMember) return;
        const reason = args.length > 1 ? args.slice(1).join(" ") : "No reason provided.";
        let profile = await new userban({
            userID: mentionedMember.id,
            reason: reason,
        })

        profile.save();
        message.channel.send({ embeds: [bannedUserEmbed] });
	},
};