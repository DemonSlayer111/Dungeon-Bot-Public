const Discord = require('discord.js')
module.exports = {
    name: 'themeswampaxe',
    execute(interaction) {

        const newEmbedSwamp = new Discord.MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Swamp Axe**__ \n \n \n**Description** \nThe swamp axe is an axe trap variant found in swamp dungeons. It consists of 3 swinging axes with gaps in between that are safe for the player to be in. The floor in the trap and the surrounding area is covered in sticky webs which reduce player movement speed and prevent jumping. Each hit from an axe deals 44 damage to the player and ignores all armor. \n \n**Strategy** \nThe challenge offered by this trap is minimal and there is a lot of room for error. To complete the trap, simply run through the narrow hallway while being careful to avoid the swinging axe. After an axe has swung, there is a fairly large window to cross before the axe swings back. This process needs to be completed once for each of the 3 axes.')
        .setImage('https://cdn.discordapp.com/attachments/813639203988570143/828061092051681320/Swamp_Axe.gif');


        const wallswamp = new Discord.MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Wall")
        .setCustomId('themeswampwall')

        const jumpswamp = new Discord.MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Jump")
        .setCustomId('themeswampjump')

        const axeswamp = new Discord.MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Axe")
        .setCustomId('themeswampaxe')
        .setDisabled(true)

        const swampTraps = new Discord.MessageActionRow()
        .addComponents([wallswamp, jumpswamp, axeswamp])

        interaction.update({embeds: [newEmbedSwamp], components: [swampTraps]})

    }
}