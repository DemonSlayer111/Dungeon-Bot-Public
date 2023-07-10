const Discord = require('discord.js');
module.exports = {
	name: "themeiceaxe",
	execute(interaction) {

        const newEmbedIce = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Ice Axe**__ \n \n \n**Description** \nThe ice axe, commonly referred to as an axecicle, is a variant of axe trap and is found in ice dungeons. It consists of 4 icicles that periodically descend from the ceiling of the trap and 3 axes in between the icicles that swing from side to side. Each hit from either an icicle or an axe deals 192 damage to players and ignores all armor, but is reduced by consumables such as beer. \n \n**Strategy** \nThere are small gaps in between each axe and icicle that can be utilized to cross each part of the trap individually instead of needing to complete the entire trap at once. When clinging to one of the walls on the side, it becomes possible to wait in the small gap between each part of the trap until it is safe to pass and move to the next part of the trap. The character positioning required is fairly precise but the technique is consistent.')
        .setImage('https://cdn.discordapp.com/attachments/760287836074278963/827755761227792425/Axecicle.gif');

          const wallice = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel('Ice Wall')
          .setCustomId('themeicewall')

          const jumpice = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel('Ice Jump')
          .setCustomId('themeicejump')

          const axeice = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel('Ice Axe')
          .setCustomId('themeiceaxe')
          .setDisabled(true)


          const iceTraps = new Discord.MessageActionRow()
          .addComponents([wallice, jumpice, axeice])

          interaction.update({embeds: [newEmbedIce], components: [iceTraps]})

    }
}