const Discord = require('discord.js');
module.exports = {
	name: "themeicejump",
	execute(interaction) {

        const newEmbedIce = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Ice Jump**__ \n \n \n**Description** \nThis variant of jump trap is found in ice dungeons and has a large pit that must be avoided.  The trap has 2 floating platforms that move vertically and in an a figure 8 shape. There is also a center platform in between the floating platforms that does not move. \n \n**Strategy** \nProvided that a player has sufficient movement speed (150%+) and is not weighed down, it is possible to jump directly to the center platform and from that point, jump again to the other end of the trap. It is also possible to jump onto the moving platforms in between each end and the center of the trap, however jumping to the middle is easier than attempting to land on moving platforms. If an aerial symbiote is equipped, the entire trap can be crossed with a single, well timed jump. Parachutes can be used in place of a symbiote but require precise timing. ')
        .setImage('https://cdn.discordapp.com/attachments/760287836074278963/827728568497864744/Ice_Jump.gif');

          const wallice = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel('Ice Wall')
          .setCustomId('themeicewall')

          const jumpice = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel('Ice Jump')
          .setCustomId('themeicejump')
          .setDisabled(true)

          const axeice = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel('Ice Axe')
          .setCustomId('themeiceaxe')



          const iceTraps = new Discord.MessageActionRow()
          .addComponents([wallice, jumpice, axeice])

          interaction.update({embeds: [newEmbedIce], components: [iceTraps]})

    }
}
