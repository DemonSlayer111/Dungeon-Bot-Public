const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
    name: 'jumpice',
    execute(interaction) {
        const newEmbedIce = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Ice Jump**__ \n \n \n**Description** \nThis variant of jump trap is found in ice dungeons and has a large pit that must be avoided.  The trap has 2 floating platforms that move vertically and in an a figure 8 shape. There is also a center platform in between the floating platforms that does not move. \n \n**Strategy** \nProvided that a player has sufficient movement speed (150%+) and is not weighed down, it is possible to jump directly to the center platform and from that point, jump again to the other end of the trap. It is also possible to jump onto the moving platforms in between each end and the center of the trap, however jumping to the middle is easier than attempting to land on moving platforms. If an aerial symbiote is equipped, the entire trap can be crossed with a single, well timed jump. Parachutes can be used in place of a symbiote but require precise timing. ')
        .setImage('https://cdn.discordapp.com/attachments/760287836074278963/827728568497864744/Ice_Jump.gif');

        const jumpruins = new MessageButton()
        .setStyle('DANGER')
        .setLabel("Lava Jump")
        .setCustomId("jumpruins")

        const icedisabled = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel("Ice jump")
        .setCustomId("jumpice")
        .setDisabled(true)
        
        const jumpswamp = new MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Jump")
        .setCustomId("jumpswamp")

        const icerow = new MessageActionRow()
        .addComponents([jumpruins, icedisabled, jumpswamp])

        interaction.update({embeds: [newEmbedIce], components: [icerow]})
    }
}