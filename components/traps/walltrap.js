const prefixModel = require("../../schemas/prefix")
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
    name: 'walltrap',
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
        .setDescription(`__**Wall Traps**__ \nWall traps are a type of trap found in all dungeon themes, they consist of a moving section of wall in a part of a dungeon hallway. This moving section of wall will periodically slam shut. The player must wait for an opening in the wall's pattern.. Players that get caught in the path of a closing wall will instantly be crushed by it. \n \n**Wall Trap Variants** \n \`${prefix2}wall ruins\` - Information about the wall trap variant found in ruins dungeons \n \`${prefix2}wall ice\` - Information about the wall trap variant found in ice dungeons \n \`${prefix2}wall swamp\` - Information about the wall trap variant found in swamp dungeons`)
        const wallruins = new MessageButton()
        .setStyle('DANGER')
        .setLabel("Ruins Wall")
        .setCustomId("wallruins")
        const wallice = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel("Ice Wall")
        .setCustomId("wallice")
        const wallswamp = new MessageButton()
        .setStyle('SUCCESS')
        .setLabel("Swamp Wall")
        .setCustomId("wallswamp")
     
        const defaultrow = new MessageActionRow()
        .addComponents([wallruins, wallice, wallswamp])

        interaction.update({embeds: [newEmbed], components: [defaultrow]})
    }
}