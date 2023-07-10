const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
    name: 'wallswamp',
    execute(interaction) {
        const newEmbedSwamp = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("**__Swamp Wall__** \n \n \n**Description** \nThis wall trap variant is found in swamp theme dungeons. The pattern for this wall trap variant consists of one set of two quick slams shut, followed by a single slow slam shut that leaves a small gap between both sides of the wall. This pattern will repeat itself endlessly. This wall trap also sticks out into the middle of the hallway permanently. Getting caught between the two walls when the wall is closing will result in the player being killed instantly. \n \n**Strategy** \nTo safely make it across the wall trap, watch the pattern of the wall and wait for the slow slam. There is a narrow gap between the two walls for the player to run through safely. The gap on this variant of wall trap is narrower due to the protruding wall, but it is still possible to complete the trap as long as the player has adequate movement speed (140%+) and is not encumbered. With a very high speed stat (200%+), it is possible to make it across a wall trap in between slams, however there is very little room for error and almost no benefit to doing so.")
        .setImage('https://cdn.discordapp.com/attachments/813591120704438282/832752231689748521/SwampWall.gif')
        
        const wallruins = new MessageButton()
        .setStyle('DANGER')
        .setLabel("Ruins Wall")
        .setCustomId("wallruins")
        
        const wallice = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel("Ice Wall")
        .setCustomId("wallice")
    
        const swampdisabled = new MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Wall")
        .setCustomId("wallswamp")
        .setDisabled(true)

        const swamprow = new MessageActionRow()
        .addComponents([wallruins, wallice, swampdisabled])

        interaction.update({embeds: [newEmbedSwamp], components: [swamprow]})
    }
}