const prefixModel = require("../../schemas/prefix")
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
    name: 'jumptrap',
    async execute(interaction) {
        const data = await prefixModel.findOne({
            GuildID: interaction.guild.id
        });
    
    
        const prefix2 = (() => {
            if (!data)
              return "?"
            else if(data)
              return data.Prefix
          })();
        const newEmbed = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription(`**__Jump Traps__** \nJump traps are a type of trap found in all dungeon themes. They consist of a large gap between the 2 ends of the trap with various types of platforms in between. The player must use these platforms to make their way across the trap and avoid the hazard found below. This hazard will instantly kill players that are unfortunate enough to fall into it. \n \n**Jump Trap Variants** \n\`${prefix2}jump ruins\` - Information about the jump trap variant found in ruins dungeons \n\`${prefix2}jump ice\` - Information about the jump trap variant found in ice dungeons \n\`${prefix2}jump swamp\` - Information about the jump trap variant found in swamp dungeons`)
        const jumpruins = new MessageButton()
        .setStyle('DANGER')
        .setLabel("Lava Jump")
        .setCustomId("jumpruins")
        const jumpice = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel("Ice Jump")
        .setCustomId("jumpice")
        const jumpswamp = new MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Jump")
        .setCustomId("jumpswamp")
     
        const defaultrow = new MessageActionRow()
        .addComponents([jumpruins, jumpice, jumpswamp])

        interaction.update({embeds: [newEmbed], components: [defaultrow]})
    }
}