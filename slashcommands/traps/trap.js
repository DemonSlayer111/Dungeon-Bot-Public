const prefixModel = require("../../schemas/prefix")
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
	name: "trap",
	description: 'Information about dungeon traps',
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

          const wall = new MessageButton()
          .setStyle('DANGER')
          .setLabel('Wall Traps')
          .setCustomId('walltrap')

          const jump = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel('Jump Traps')
          .setCustomId('jumptrap')

          const axe = new MessageButton()
          .setStyle('SUCCESS')
          .setLabel('Axe Traps')
          .setCustomId('axetrap')

          const defaultrow = new MessageActionRow()
          .addComponents([wall, jump, axe])

          const newEmbed = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`**__Traps__**\nTraps are a type of obstacle found in dungeons. There are 3 main types of trap, the wall, jump, and axe trap. They all differ in terms of the threat but the overall objective is the same. The goal is to cross the hazard safely. Not all traps are required to complete a dungeon although most dungeons usually have a few required traps. \n\n**Trap Variants**\n\`${prefix2}wall\` - Information about the wall trap and its variants\n\`${prefix2}jump\` - Information about the jump trap and its variants\n\`${prefix2}axe\`- Information about the axe trap and its variants`)
          
          const msg = await interaction.reply({ embeds: [newEmbed], components: [defaultrow], fetchReply: true})
          const filter = (i) => i.user.id === interaction.user.id;
          const collector = msg.createMessageComponentCollector({ filter, idle: 30000 });
          collector.on('collect', i => {
      
              const component = interaction.client.components.get(i.customId)
              component.execute(i)
      
      
      
          });
          collector.on('end', collected => {
            interaction.editReply({components: []})
    
        });

    },
};