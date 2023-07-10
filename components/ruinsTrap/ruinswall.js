const Discord = require('discord.js')
module.exports = {
    name: 'themeruinswall',
    execute(interaction) {


        const newEmbedRuins = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Ruins Wall**__ \n \n \n**Description** \nThis wall trap variant is found in ruins dungeons. The pattern for this wall trap variant consists of either one or two sets of two quick slams shut, followed by a single slow slam shut that leaves a small gap between the moving wall and the stationary wall. This pattern will repeat endlessly. Getting caught in the wall's path as its closing will result in the player being killed \n \n**Strategy** \nTo safely pass through a wall trap, watch its pattern and wait for the wall to slam shut slowly. There will be a narrow gap between the two walls for the player to run through safely. As long as the player has an adequate speed stat (140%+) and is not encumbered, making it across the wall trap before the pattern repeats itself can be done with relative ease. With a very high speed stat (200%+), it is possible to make it across a wall trap in between a set of fast slaps, however this method leaves very little room for error and offers little to no benefit over waiting for the gap in the wall.")
        .setImage('https://cdn.discordapp.com/attachments/760287836074278963/829197530415497276/Ruins_Wall.gif')
        
        const wallruins = new Discord.MessageButton()
        .setStyle("DANGER")
        .setLabel("Ruins Wall")
        .setCustomId("themeruinswall")
        .setDisabled(true)

        const jumpruins = new Discord.MessageButton()
        .setStyle("DANGER")
        .setLabel("Lava Jump")
        .setCustomId("themeruinsjump")

        const axeruins = new Discord.MessageButton()
        .setStyle("DANGER")
        .setLabel("Ruins Axe")
        .setCustomId("themeruinsaxe")

        const ruinsTraps = new Discord.MessageActionRow()
        .addComponents([wallruins, jumpruins, axeruins])

        interaction.update({embeds: [newEmbedRuins], components: [ruinsTraps]})

    }
}