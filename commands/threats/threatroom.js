const prefixModel = require("../../schemas/prefix")
const { MessageEmbed, MessageSelectMenu, MessageActionRow } = require('discord.js')
module.exports = {
	name: 'threatroom',
    aliases: ['threat'],
	description: 'Get information about dungeon threat rooms',
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
        .setDescription(`__**Threat Rooms**__ \nThreat rooms are one of the main types of threats found in dungeons and a few of them will be required to complete each dungeon. They generally consist of multiple waves of a specified creature or creatures and the goal is to kill all the creatures in order to complete the room and continue the dungeon. While most threat room creatures are similar to their non threat room variants, creatures in threat rooms can have modified stats such as damage, health, and creature size. There are also several types of threat room effects that will modify the behavior of the threat room or creatures inside. \n \n**Threat Room Effects** \n\`${prefix2}help threatroom\` - Lists commands related to threatrooms`)

        const newEmbedArmorless = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Armor Ineffective**__ \nThis threat room type follows the standard threat room pattern of multiple waves of creatures but with the added challenge of ineffective armor. Inside this type of threat room, all damage taken will be calculated as if the player was wearing no armor and no armor durability will be lost. Once the room is completed, armor effectiveness returns.')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314417884037190/Armor_Ineffective.png');
        
        const newEmbedReduced = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Armor Effectiveness Reduced**__ \nThis threat room type follows the standard threat room pattern of multiple waves of creatures but with the added challenge of only having 50% of the player's armor protect from damage. While in this room, all damage will be calculated as if the player only has half of their current armor. Once the room is completed, armor effectiveness returns to normal.")
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314417304961054/ArmorEffeciveness_Reduced.png');
                
        const newEmbedGrowing = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Growing**__ \nThis type of threat room consists of multiple waves of a single creature. With each wave, the creature will get stronger. Its health, damage, size, and level will all increase. ')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314489367691325/Growing_Dino.png');
        
        const newEmbedJuggernaut = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Juggernaut**__ \nThis type of threat room has 2 creatures, a single juggernaut creature that has increased stats and multiple minion creatures.The goal of this room is to kill the juggernaut as quickly as possible. While the juggernaut is alive, the minions will continue to spawn and attack the player. ')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314416033824818/Juggernaut_Dino.png');
        
        const newEmbedSlowed = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Slowed**__ \nThis type of threat room consists of multiple waves of creatures with an additional effect applied to the player. Player movement speed in this room is reduced to 50% of its original value while creature movement speed is unaffected.')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314506752819210/StickyFeet_Survivor.png');
        
        const newEmbedCold = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Decreasing Temperature**__ \nThis type of threat room consists of multiple waves of creatures with an additional effect applied to the room. The temperature inside of the room will begin decreasing every second and will continue to decrease until the room is completed. If this room is not completed quickly, the cold temperature will begin to deal damage to the player.')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314507763122196/Temp_Decreased.png');
        
        const newEmbedHot = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Increasing Temperature**__ \nThis type of threat room consists of multiple waves of creatures with an additional effect applied to the room. The temperature inside of the room will begin increasing every second and will continue to increase until the room is completed. If this room is not completed quickly, the hot temperature will begin to deal damage to the player.')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314509554483220/Temp_Increased.png');
        
        const newEmbedTurbo = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription('__**Turbo**__ \nThis room consists of multiple waves of creatures with an additional effect applied to the creatures. The creatures in this room will have a significant speed increase  that will allow even some of the slowest creatures to keep up with a fast player.')
        .setThumbnail('https://cdn.discordapp.com/attachments/813639203988570143/828314413207257118/Turbo_Dino.png');


          const threatroomMenu = new MessageSelectMenu()
          .setCustomId('threatroommenu')
          .setPlaceholder('Select a threat room')
          .addOptions([
              {
                  label: 'Armor Ineffective',
                  description: '0% Armor Effectiveness',
                  value: 'armorineffective',
                  emoji: '856399239503806464'
              },
              {
                  label: 'Armor Effectiveness Reduced',
                  description: '50% Armor Effectiveness',
                  value: 'armoreffectivenessreduced',
                  emoji: '856399240065712158'
              },
              {
                  label: 'Growing',
                  description: 'Progressively stronger creatures',
                  value: 'growing',
                  emoji: '856399241706209281'
              },
              {
                  label: 'Juggernaut',
                  description: "One juggernaut creature with minions",
                  value: 'juggernaut',
                  emoji: '856399240280670238'
              },
              {
                  label: 'Slowed',
                  description: 'Player speed reduced by 50%',
                  value: 'slowed',
                  emoji: '856399241030664192'
              },
              {
                  label: 'Turbo',
                  description: 'Creature speed increased',
                  value: 'turbo',
                  emoji: '856399240061255690'
              },
              {
                  label: 'Decreasing Temperature',
                  description: 'Room temperature decreases',
                  value: 'decreasingtemperature',
                  emoji: '856399241366994975'
              },
              {
                  label: 'Increasing Temperature',
                  description: 'Room temperature increases',
                  value: 'increasingtemperature',
                  emoji: '856399241701621770'
              }
          ])

          const rowthreatroom = new MessageActionRow()
          .addComponents([threatroomMenu])

          let msg = ""

          switch(args[0]){
            case "armorless":
                msg = await message.channel.send({embeds:[ newEmbedArmorless], components: [rowthreatroom]})  
            break;

            case "reduced":
                msg = await message.channel.send({embeds: [newEmbedReduced], components: [rowthreatroom]})  
            break;

            case "growing":
                msg = await message.channel.send({ embeds: [newEmbedGrowing], components: [rowthreatroom]})  
            break;

            case "juggernaut":
                msg = await message.channel.send({embeds: [newEmbedJuggernaut], components: [rowthreatroom]})  
            break;
            
            case "slowed":
                msg = await message.channel.send({embeds: [newEmbedSlowed], components: [rowthreatroom]})  
            break;

            case "cold":
                msg = await message.channel.send({embeds: [newEmbedCold], components: [rowthreatroom]})  
            break;

            case "hot":
                msg = await message.channel.send({embeds: [newEmbedHot], components: [rowthreatroom]})  
            break;

            case "turbo":
                msg = await message.channel.send({embeds: [newEmbedTurbo], components: [rowthreatroom]})  
            break;

            default: msg = await message.channel.send({ embeds: [newEmbed], components: [rowthreatroom]})  
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