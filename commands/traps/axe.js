const prefixModel = require("../../schemas/prefix")
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
	name: "axe",
	description: 'Information about axe traps',
	async execute(message, args) {
        const data = await prefixModel.findOne({
            GuildID: message.guild.id
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
    
          const newEmbedRuins = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription("**__Ruins Axe__** \n \n \n**Description** \nThe ruins axe is an axe trap variant found in ruins dungeons. It consists of 3 swinging axes that have gaps in between that are safe for players to stand in. Each hit from an axe deals 64 damage to the player and ignores all armor. \n \n**Strategy** \nThe challenge offered by this trap is minimal and it can still be completed even if mistakes are made. To complete the trap, simply run through the narrow hallway while watching the axes swing. After an axe has swung, simply cross its path to the next gap. This process needs to be completed once for each of the 3 axes.")
          .setImage('https://cdn.discordapp.com/attachments/813591120704438282/832760573191520256/Ruins_Axe.gif');
  
   
          const newEmbedIce = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription('__**Ice Axe**__ \n \n \n**Description** \nThe ice axe, commonly referred to as an axecicle, is a variant of axe trap and is found in ice dungeons. It consists of 4 icicles that periodically descend from the ceiling of the trap and 3 axes in between the icicles that swing from side to side. Each hit from either an icicle or an axe deals 192 damage to players and ignores all armor, but is reduced by consumables such as beer. \n \n**Strategy** \nThere are small gaps in between each axe and icicle that can be utilized to cross each part of the trap individually instead of needing to complete the entire trap at once. When clinging to one of the walls on the side, it becomes possible to wait in the small gap between each part of the trap until it is safe to pass and move to the next part of the trap. The character positioning required is fairly precise but the technique is consistent.')
          .setImage('https://cdn.discordapp.com/attachments/760287836074278963/827755761227792425/Axecicle.gif');
  
   
          const newEmbedSwamp = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription('__**Swamp Axe**__ \n \n \n**Description** \nThe swamp axe is an axe trap variant found in swamp dungeons. It consists of 3 swinging axes with gaps in between that are safe for the player to be in. The floor in the trap and the surrounding area is covered in sticky webs which reduce player movement speed and prevent jumping. Each hit from an axe deals 44 damage to the player and ignores all armor. \n \n**Strategy** \nThe challenge offered by this trap is minimal and there is a lot of room for error. To complete the trap, simply run through the narrow hallway while being careful to avoid the swinging axe. After an axe has swung, there is a fairly large window to cross before the axe swings back. This process needs to be completed once for each of the 3 axes.')
          .setImage('https://cdn.discordapp.com/attachments/813639203988570143/828061092051681320/Swamp_Axe.gif');


          const axeruins = new MessageButton()
          .setStyle('DANGER')
          .setLabel("Ruins Axe")
          .setCustomId("axeruins")
          
          const ruinsdisabled = new MessageButton()
          .setStyle('DANGER')
          .setLabel("Ruins Axe")
          .setCustomId("axeruins")
          .setDisabled(true)
          
          const axeice = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel("Ice Axe")
          .setCustomId("axeice")
          
          const icedisabled = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel("Ice Axe")
          .setCustomId("axeice")
          .setDisabled(true)
      
          const axeswamp = new MessageButton()
          .setStyle('SUCCESS')
          .setLabel("Swamp Axe")
          .setCustomId("axeswamp")
  
          const swampdisabled = new MessageButton()
          .setStyle('SUCCESS')
          .setLabel("Swamp Axe")
          .setCustomId("axeswamp")
          .setDisabled(true)


          const ruinsrow = new MessageActionRow()
          .addComponents([ruinsdisabled, axeice, axeswamp])

          const icerow = new MessageActionRow()
          .addComponents([axeruins, icedisabled, axeswamp])
          
          const swamprow = new MessageActionRow()
          .addComponents([axeruins, axeice, swampdisabled])
          
          const defaultrow = new MessageActionRow()
          .addComponents([axeruins, axeice, axeswamp])

          let msg = ''

          switch(args[0]) {
            case "ruins":
                msg = await message.channel.send({  embeds: [newEmbedRuins], components: [ruinsrow]})
                break;
            
            case "ice":
                msg = await message.channel.send({  embeds: [newEmbedIce], components: [icerow]}) 
                break;
    
            case "swamp":
                msg = await message.channel.send({  embeds: [newEmbedSwamp], components: [swamprow]}) 
                
                break;
    
            default:
                msg = await message.channel.send({ embeds: [newEmbed], components: [defaultrow]}) 
            }
            const filter = (interaction) => interaction.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({ filter, idle: 30000 });
            collector.on('collect', i => {
        
                const component = message.client.components.get(i.customId)
                component.execute(i)
        
        
        
            });
            collector.on('end', collected => {
                msg.edit({components: []})
                
            });
    },
};