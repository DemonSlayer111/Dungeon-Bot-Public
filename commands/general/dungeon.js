const Discord = require('discord.js');
const prefixModel = require("../../schemas/prefix")
module.exports = {
	name: 'dungeon',
	description: 'General information about ARK dungeons and dungeon themes.',
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

          const newEmbed = new Discord.MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Dungeons**__`)
          .addField('_ _', '**Overview**\nDungeons are end game challenges available to any player that is at least level 40. There are several types of dungeons, each with its own challenges. They can be accessed at any obelisk or TEK Teleporter. Upon entering, players will have 30 minutes to complete. Failing to complete in time results in death. Dungeons contain numerous rewards and challenges for players that enter. Most require you to find a hidden facility key in one of the chests in order to gain access through a gate to continue on. A new dungeon is available every Tuesday at 12pm Eastern Time and will be available for 1 week.', false)
          .addField('_ _', '**Rewards**\nDungeons are filled with many different chests that can give valuable rewards to players. Most can give different types of items, weapon blueprints, or some arketypes. It is also possible to obtain saddle blueprints and premium items from certain chests. Dungeons are also the main source of TEK blueprints. Each chest that is opened will increase the time remaining to complete by 1 minute.', false)
          .addField('_ _', '**Threats**\nAlong with great rewards, dungeons are also filled with many threats. The three main types found in dungeons are traps, threat rooms, and bosses. Traps differ depending on the specific trap and dungeon type but generally require players to cross a hazardous area without dying. Threat rooms are rooms that contain multiple waves of creatures that must be defeated to complete the room and proceed onward. Completing a threat room increases the timer by 5 minutes. The final threat found in a dungeon is the boss. Every dungeon has a boss and defeating the boss is required to complete the dungeon. These bosses have very large amounts of health and will quickly wipe out unprepared players. It is important to note that upon entering a boss arena, your timer is automatically reset to 15 minutes. Element is rewarded on completion.', false)
          .addField('_ _', "**Blitz Week**\nEvery 8 weeks, instead of a new dungeon being available, 7 previous dungeons will become accessible again. Each day of the week will feature one of the 7 dungeons. \nDuring blitz week, dungeons will have a 15 minute starting timer and will reward double the element for completion. Eerie equus also have a chance to appear in hallways and the chance to encounter Noctis is doubled.", false)
          .addField('_ _', `**Additional Information**\n\`${prefix2}map\` - Information about the current dungeon\n\`${prefix2}help dungeon\` - Lists commands for dungeons and their variants\n\`${prefix2}help boss\` - Lists commands related to dungeon bosses\n\`${prefix2}help traps\` - Lists commands related to traps\n\`${prefix2}help threatroom\` - Lists commands related to threat rooms`)
  
          const newEmbedRuins = new Discord.MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Ruins Dungeons**__\nThe ruins dungeon type was the first to be introduced and resembles an abandoned labyrinth. This type of dungeon has 3 main traps, the ruins wall, lava jump, and ruins axe. Most of the dungeon is dark, being lit up with wall torches at certain points.\n\n**Ruins Traps**\n\`${prefix2}wall ruins\` - Information about ruins wall trap\n\`${prefix2}jump ruins\` - Information about lava jump trap\n\`${prefix2}axe ruins\` - Information about the ruins axe trap`)
          .setImage("https://cdn.discordapp.com/attachments/760287836074278963/836005643428823051/image1.png")
  
          const newEmbedIce = new Discord.MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Ice Dungeons**__\nThe ice dungeon type was the second to be added and is completely frozen over. The walls are covered in ice and the temperature is very cold.  There are vents on the ground that emit blasts of cold air that deals damage. This dungeon type has 3 main traps, the ice wall, ice jump, and ice axe. Most of the dungeon is a bit dark, being lit up with wall torches at certain points.\n\n**Ice Traps**\n\`${prefix2}wall ice\` - Information about ice wall trap\n\`${prefix2}jump ice\` - Information about ice jump trap\n\`${prefix2}axe ice\` - Information about the ice axe trap`)
          .setImage("https://cdn.discordapp.com/attachments/760287836074278963/836005644515278869/image2.png")
  
          const newEmbedSwamp = new Discord.MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Swamp Dungeons**__\nThe swamp dungeon type was the third to be added and is covered in moss, fungi, or cobwebs on most surfaces. There are vents on the ground which emit poisonous gas and some walls shoot darts which cause a hallucinogenic effect. This dungeon type has 3 main traps, the swamp wall, swamp jump, and swamp axe. Most of the dungeon is very dark, being lit up with wall torches at certain points.\n\n**Swamp Traps**\n\`${prefix2}wall swamp\` - Information about swamp wall trap\n\`${prefix2}jump swamp\` - Information about swamp jump trap\n\`${prefix2}axe swamp\` - Information about the swamp axe trap`)
          .setImage("https://cdn.discordapp.com/attachments/760287836074278963/836005642263199784/image0.png")
        
          const buttonRuins = new Discord.MessageButton()
          .setStyle("DANGER")
          .setLabel("Ruins Dungeon")
          .setCustomId("ruinsdungeon")

          const buttonRuinsDisabled = new Discord.MessageButton()
          .setStyle("DANGER")
          .setLabel("Ruins Dungeon")
          .setCustomId("ruinsdungeon")
          .setDisabled(true)

          const buttonIce = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel("Ice Dungeon")
          .setCustomId("icedungeon")
          
          const buttonIceDisabled = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel("Ice Dungeon")
          .setCustomId("icedungeon")
          .setDisabled(true)

          const buttonSwamp = new Discord.MessageButton()
          .setStyle("SUCCESS")
          .setLabel("Swamp Dungeon")
          .setCustomId("swampdungeon")

          const buttonSwampDisabled = new Discord.MessageButton()
          .setStyle("SUCCESS")
          .setLabel("Swamp Dungeon")
          .setCustomId("swampdungeon")
          .setDisabled(true)

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

          const wallice = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel('Ice Wall')
          .setCustomId('themeicewall')

          const jumpice = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel('Ice Jump')
          .setCustomId('themeicejump')

          const axeice = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel('Ice Axe')
          .setCustomId('themeiceaxe')

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

          const defaultRow = new Discord.MessageActionRow()
          .addComponents([buttonRuins, buttonIce, buttonSwamp])
          
          const ruinsRow = new Discord.MessageActionRow()
          .addComponents([buttonRuinsDisabled, buttonIce, buttonSwamp])

          const iceRow = new Discord.MessageActionRow()
          .addComponents([buttonRuins, buttonIceDisabled, buttonSwamp])
          
          const swampRow = new Discord.MessageActionRow()
          .addComponents([buttonRuins, buttonIce, buttonSwampDisabled])

          const ruinsTraps = new Discord.MessageActionRow()
          .addComponents([wallruins, jumpruins, axeruins])

          const iceTraps = new Discord.MessageActionRow()
          .addComponents([wallice, jumpice, axeice])

          const swampTraps = new Discord.MessageActionRow()
          .addComponents([wallswamp, jumpswamp, axeswamp])

          let msg = ""

          switch(args[0]){
            case "ruins":
                msg = await message.channel.send({embeds: [newEmbedRuins], components: [ruinsRow, ruinsTraps]}) 
            break;
            
            case "ice":
                msg = await message.channel.send({embeds: [newEmbedIce], components: [iceRow, iceTraps]}) 
            break;

            case "swamp":
                msg = await message.channel.send({embeds: [newEmbedSwamp], components: [swampRow, swampTraps]}) 
            break;

            default: msg = await message.channel.send({embeds: [newEmbed], components: [defaultRow]})
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