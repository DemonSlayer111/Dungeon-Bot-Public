const Discord = require('discord.js');
module.exports = {
	name: "invite",
	description: 'Get invite, support, and vote links for the bot',
	execute(interaction) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setThumbnail(`${interaction.client.user.displayAvatarURL({format: 'png', size: 4096})}`)
        .setDescription("[Dungeon Bot - Invite Link](https://discord.com/oauth2/authorize?client_id=826593310457987122&permissions=67488832&scope=bot%20applications.commands)\n\n[Dungeon Bot - Support Link](https://discord.gg/xDHNPvJgW5)\n\n**Dungeon Bot - Vote Links:**")
        
        const topggButton = new Discord.MessageButton()
        .setStyle('LINK')
        .setURL('https://top.gg/bot/826593310457987122')
        .setLabel('Top.gg')

        const dblButton = new Discord.MessageButton()
        .setStyle('LINK')
        .setURL('https://discordbotlist.com/bots/dungeons')
        .setLabel('DiscordBotList')

        const boatsButton = new Discord.MessageButton()
        .setStyle('LINK')
        .setURL('https://discord.boats/bot/826593310457987122')
        .setLabel('discord.boats')
        
        const voteLinks = new Discord.MessageActionRow()
        .addComponents([topggButton, dblButton, boatsButton])

        interaction.reply({embeds: [newEmbed], components: [voteLinks]});
	},
};