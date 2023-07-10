const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
    name: 'wallice',
    execute(interaction) {
        const newEmbedIce = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Ice Wall**__ \n \n \n**Description** \nThis variant of wall trap is found in ice dungeons. The pattern for this wall trap consists of a single quick slam shut followed by 3 sets of slams consisting of 2 quick slams shut followed by a slow slam shut. After the 3rd set of slams, there will be a small gap between the two walls that the player can use to cross the trap. This pattern will repeat itself endlessly. Getting caught in the wall's path as its closing will result in the player being killed instantly. \n \n**Strategy** \nTo safely cross the wall trap, watch the pattern of the wall and wait for the 3rd slow slam shut. The narrow gap left by the wall can be used to cross the trap. As long as the player has adequate movement speed (140%+) and is not encumbered, making it across the wall trap can be done with minimal difficulty. With a very high speed stat (200%+), it is possible to make it across a wall trap in between slams, however this method has very little room for error and offers little to no benefit.")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/833073164278956092/Ice_Wall.gif")

        const wallruins = new MessageButton()
        .setStyle('DANGER')
        .setLabel("Ruins Wall")
        .setCustomId("wallruins")

        const icedisabled = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel("Ice Wall")
        .setCustomId("wallice")
        .setDisabled(true)
    
        const wallswamp = new MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Wall")
        .setCustomId("wallswamp")

        const icerow = new MessageActionRow()
        .addComponents([wallruins, icedisabled, wallswamp])

        interaction.update({embeds: [newEmbedIce], components: [icerow]})
    }
}