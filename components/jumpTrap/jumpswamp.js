const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
    name: 'jumpswamp',
    execute(interaction) {
        const newEmbedSwamp = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Swamp Jump**__ \n \n \n**Description** \nThe swamp jump is a jump trap variant found inside of swamp dungeons.  The trap consists of a large pit with 10 square platforms arranged in a 5x2 grid that continuously disappear and reappear. While invisible, the platforms cannot be used by a player and attempting to step on them will result in  the player falling to their death. \n \n**Strategy** \nWhile the platforms can feel disorienting at first, they do follow a pattern. There is a point in the pattern where all 10 of the platforms will be solid for a few seconds, allowing for easy passage. The appearance of a platform contains information about when it will disappear next. Platforms that will be solid for some time are a brighter yellow color. When a platform is about to disappear, it becomes darker and more transparent. An aerial symbiote can be used to complete the trap in 1 jump and bypass the disappearing platforms. A parachute can be used in place of an aerial symbiote but requires more precise timing. ')
        .setImage('https://cdn.discordapp.com/attachments/760287836074278963/828050123744346122/Swamp_Jump.gif');

        const jumpruins = new MessageButton()
        .setStyle('DANGER')
        .setLabel("Lava Jump")
        .setCustomId("jumpruins")

        const jumpice = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel("Ice Jump")
        .setCustomId("jumpice")
        
        const swampdisabled = new MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Jump")
        .setCustomId("jumpswamp")
        .setDisabled(true)

        const swamprow = new MessageActionRow()
        .addComponents([jumpruins, jumpice, swampdisabled])

        interaction.update({embeds: [newEmbedSwamp], components: [swamprow]})
    }
}