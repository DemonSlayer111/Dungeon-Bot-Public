const Discord = require('discord.js')
module.exports = {
    name: 'themeruinsaxe',
    execute(interaction) {


        const newEmbedRuins = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("**__Ruins Axe__** \n \n \n**Description** \nThe ruins axe is an axe trap variant found in ruins dungeons. It consists of 3 swinging axes that have gaps in between that are safe for players to stand in. Each hit from an axe deals 64 damage to the player and ignores all armor. \n \n**Strategy** \nThe challenge offered by this trap is minimal and it can still be completed even if mistakes are made. To complete the trap, simply run through the narrow hallway while watching the axes swing. After an axe has swung, simply cross its path to the next gap. This process needs to be completed once for each of the 3 axes.")
        .setImage('https://cdn.discordapp.com/attachments/813591120704438282/832760573191520256/Ruins_Axe.gif');

        const wallruins = new Discord.MessageButton()
        .setStyle("DANGER")
        .setLabel("Ruins Wall")
        .setCustomId("themeruinswall")

        const jumpruins = new Discord.MessageButton()
        .setStyle("DANGER")
        .setLabel("Lava Jump")
        .setCustomId("themeruinsjump")

        const axeruins = new Discord.MessageButton()
        .setStyle("DANGER")
        .setLabel("Ruins Axe")
        .setCustomId("themeruinsaxe")
        .setDisabled(true)

        const ruinsTraps = new Discord.MessageActionRow()
        .addComponents([wallruins, jumpruins, axeruins])

        interaction.update({embeds: [newEmbedRuins], components: [ruinsTraps]})

    }
}