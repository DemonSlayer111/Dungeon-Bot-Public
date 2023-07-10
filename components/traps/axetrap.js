const prefixModel = require("../../schemas/prefix")
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
    name: 'axetrap',
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
        .setDescription(`__**Axe Traps**__ \nAxe traps are a type of trap that is found in all dungeon themes. There are a few variants of the trap but they generally consist of 3 swinging axes and may include some other type of hazard. The axes do not instantly kill the player but do deal a significant amount of damage and ignore all armor. To complete the trap, the player has to make it across the trap while avoiding the axes and any other hazard present. \n \n**Axe Trap Variants** \n\`${prefix2}axe ruins\` - Information about the axe trap variant found in ruins dungeons \n\`${prefix2}axe ice\` - Information about the axe trap variant found in ice dungeons \n\`${prefix2}axe swamp\` - Information about the axe trap variant found in swamp dungeons`)
        const axeruins = new MessageButton()
        .setStyle('DANGER')
        .setLabel("Ruins Axe")
        .setCustomId("axeruins")
        const axeice = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel("Ice Axe")
        .setCustomId("axeice")
        const axeswamp = new MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Axe")
        .setCustomId("axeswamp")
     
        const defaultrow = new MessageActionRow()
        .addComponents([axeruins, axeice, axeswamp])

        interaction.update({embeds: [newEmbed], components: [defaultrow]})
    }
}