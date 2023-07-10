const prefixModel = require("../../schemas/prefix")
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
	name: "wall",
	description: 'Information about wall traps',
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
          const newEmbedRuins = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription("__**Ruins Wall**__ \n \n \n**Description** \nThis wall trap variant is found in ruins dungeons. The pattern for this wall trap variant consists of either one or two sets of two quick slams shut, followed by a single slow slam shut that leaves a small gap between the moving wall and the stationary wall. This pattern will repeat endlessly. Getting caught in the wall's path as its closing will result in the player being killed \n \n**Strategy** \nTo safely pass through a wall trap, watch its pattern and wait for the wall to slam shut slowly. There will be a narrow gap between the two walls for the player to run through safely. As long as the player has an adequate speed stat (140%+) and is not encumbered, making it across the wall trap before the pattern repeats itself can be done with relative ease. With a very high speed stat (200%+), it is possible to make it across a wall trap in between a set of fast slaps, however this method leaves very little room for error and offers little to no benefit over waiting for the gap in the wall.")
          .setImage('https://cdn.discordapp.com/attachments/760287836074278963/829197530415497276/Ruins_Wall.gif')
          const newEmbedIce = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription("__**Ice Wall**__ \n \n \n**Description** \nThis variant of wall trap is found in ice dungeons. The pattern for this wall trap consists of a single quick slam shut followed by 3 sets of slams consisting of 2 quick slams shut followed by a slow slam shut. After the 3rd set of slams, there will be a small gap between the two walls that the player can use to cross the trap. This pattern will repeat itself endlessly. Getting caught in the wall's path as its closing will result in the player being killed instantly. \n \n**Strategy** \nTo safely cross the wall trap, watch the pattern of the wall and wait for the 3rd slow slam shut. The narrow gap left by the wall can be used to cross the trap. As long as the player has adequate movement speed (140%+) and is not encumbered, making it across the wall trap can be done with minimal difficulty. With a very high speed stat (200%+), it is possible to make it across a wall trap in between slams, however this method has very little room for error and offers little to no benefit.")
          .setImage("https://cdn.discordapp.com/attachments/760287836074278963/833073164278956092/Ice_Wall.gif")
          const newEmbedSwamp = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription("**__Swamp Wall__** \n \n \n**Description** \nThis wall trap variant is found in swamp theme dungeons. The pattern for this wall trap variant consists of one set of two quick slams shut, followed by a single slow slam shut that leaves a small gap between both sides of the wall. This pattern will repeat itself endlessly. This wall trap also sticks out into the middle of the hallway permanently. Getting caught between the two walls when the wall is closing will result in the player being killed instantly. \n \n**Strategy** \nTo safely make it across the wall trap, watch the pattern of the wall and wait for the slow slam. There is a narrow gap between the two walls for the player to run through safely. The gap on this variant of wall trap is narrower due to the protruding wall, but it is still possible to complete the trap as long as the player has adequate movement speed (140%+) and is not encumbered. With a very high speed stat (200%+), it is possible to make it across a wall trap in between slams, however there is very little room for error and almost no benefit to doing so.")
          .setImage('https://cdn.discordapp.com/attachments/813591120704438282/832752231689748521/SwampWall.gif')


          const wallruins = new MessageButton()
          .setStyle('DANGER')
          .setLabel("Ruins Wall")
          .setCustomId("wallruins")
          
          const ruinsdisabled = new MessageButton()
          .setStyle('DANGER')
          .setLabel("Ruins Wall")
          .setCustomId("wallruins")
          .setDisabled(true)
          
          const wallice = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel("Ice Wall")
          .setCustomId("wallice")
          
          const icedisabled = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel("Ice Wall")
          .setCustomId("wallice")
          .setDisabled(true)
      
          const wallswamp = new MessageButton()
          .setStyle('SUCCESS')
          .setLabel("Swamp Wall")
          .setCustomId("wallswamp")
  
          const swampdisabled = new MessageButton()
          .setStyle('SUCCESS')
          .setLabel("Swamp Wall")
          .setCustomId("wallswamp")
          .setDisabled(true)


          const ruinsrow = new MessageActionRow()
          .addComponents([ruinsdisabled, wallice, wallswamp])

          const icerow = new MessageActionRow()
          .addComponents([wallruins, icedisabled, wallswamp])
          
          const swamprow = new MessageActionRow()
          .addComponents([wallruins, wallice, swampdisabled])
          
          const defaultrow = new MessageActionRow()
          .addComponents([wallruins, wallice, wallswamp])

          let msg = ""

          switch(interaction.options._hoistedOptions[0]?.value){
            case "ruins":
                msg = await interaction.reply({  embeds: [newEmbedRuins], components: [ruinsrow], fetchReply: true})
                break;
            
            case "ice":
                msg = await interaction.reply({  embeds: [newEmbedIce], components: [icerow], fetchReply: true}) 
                break;
    
            case "swamp":
                msg = await interaction.reply({  embeds: [newEmbedSwamp], components: [swamprow], fetchReply: true}) 
                
                break;
    
            default:
                msg = await interaction.reply({ embeds: [newEmbed], components: [defaultrow], fetchReply: true}) 
            }
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