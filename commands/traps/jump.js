const prefixModel = require("../../schemas/prefix")
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
	name: "jump",
	description: 'Information about jump traps',
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
          .setDescription(`**__Jump Traps__** \nJump traps are a type of trap found in all dungeon themes. They consist of a large gap between the 2 ends of the trap with various types of platforms in between. The player must use these platforms to make their way across the trap and avoid the hazard found below. This hazard will instantly kill players that are unfortunate enough to fall into it. \n \n**Jump Trap Variants** \n\`${prefix2}jump ruins\` - Information about the jump trap variant found in ruins dungeons \n\`${prefix2}jump ice\` - Information about the jump trap variant found in ice dungeons \n\`${prefix2}jump swamp\` - Information about the jump trap variant found in swamp dungeons`)
  
          const newEmbedRuins = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription("__**Lava Jump**__ \n \n \n**Description** \nThe lava jump trap, found in the ruins theme, is a jump trap variant.  It consists of a large pool of lava that will instantly kill any player that touches it.  The trap itself consists of 3 platforms, 2 moving and one stationary in the center.  The moving platforms are small, circular and placed before and after the middle stationary platform.  They repeatedly sink into the lava and resurface moments later as well as move from side to side..\n \n**Strategy** \nIf a player has sufficient movement speed (150%+) and isn’t encumbered , it is possible to jump from the start of the trap to the center and then from the center to the end.  Another method of crossing involves jumping onto the small moving platforms as well as the center stationary platform, however this method is much riskier due to the fact that the platforms sink below the surface of the lava.  If an aerial symbiote is equipped, the entire trap can be completed in a single jump.  A parachute can be used in place of a symbiote but requires precise timing.")
          .setImage('https://cdn.discordapp.com/attachments/760287836074278963/829197521359601704/Lava_Jump.gif')
  
          const newEmbedIce = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription('__**Ice Jump**__ \n \n \n**Description** \nThis variant of jump trap is found in ice dungeons and has a large pit that must be avoided.  The trap has 2 floating platforms that move vertically and in an a figure 8 shape. There is also a center platform in between the floating platforms that does not move. \n \n**Strategy** \nProvided that a player has sufficient movement speed (150%+) and is not weighed down, it is possible to jump directly to the center platform and from that point, jump again to the other end of the trap. It is also possible to jump onto the moving platforms in between each end and the center of the trap, however jumping to the middle is easier than attempting to land on moving platforms. If an aerial symbiote is equipped, the entire trap can be crossed with a single, well timed jump. Parachutes can be used in place of a symbiote but require precise timing. ')
          .setImage('https://cdn.discordapp.com/attachments/760287836074278963/827728568497864744/Ice_Jump.gif');
  
          const newEmbedSwamp = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription('__**Swamp Jump**__ \n \n \n**Description** \nThe swamp jump is a jump trap variant found inside of swamp dungeons.  The trap consists of a large pit with 10 square platforms arranged in a 5x2 grid that continuously disappear and reappear. While invisible, the platforms cannot be used by a player and attempting to step on them will result in  the player falling to their death. \n \n**Strategy** \nWhile the platforms can feel disorienting at first, they do follow a pattern. There is a point in the pattern where all 10 of the platforms will be solid for a few seconds, allowing for easy passage. The appearance of a platform contains information about when it will disappear next. Platforms that will be solid for some time are a brighter yellow color. When a platform is about to disappear, it becomes darker and more transparent. An aerial symbiote can be used to complete the trap in 1 jump and bypass the disappearing platforms. A parachute can be used in place of an aerial symbiote but requires more precise timing. ')
          .setImage('https://cdn.discordapp.com/attachments/760287836074278963/828050123744346122/Swamp_Jump.gif');


          const jumpruins = new MessageButton()
          .setStyle('DANGER')
          .setLabel("Lava Jump")
          .setCustomId("jumpruins")
          
          const ruinsdisabled = new MessageButton()
          .setStyle('DANGER')
          .setLabel("Lava Jump")
          .setCustomId("jumpruins")
          .setDisabled(true)
          
          const jumpice = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel("Ice Jump")
          .setCustomId("jumpice")
          
          const icedisabled = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel("Ice jump")
          .setCustomId("jumpice")
          .setDisabled(true)
      
          const jumpswamp = new MessageButton()
          .setStyle('SUCCESS')
          .setLabel("Swamp Jump")
          .setCustomId("jumpswamp")
  
          const swampdisabled = new MessageButton()
          .setStyle('SUCCESS')
          .setLabel("Swamp Jump")
          .setCustomId("jumpswamp")
          .setDisabled(true)


          const ruinsrow = new MessageActionRow()
          .addComponents([ruinsdisabled, jumpice, jumpswamp])

          const icerow = new MessageActionRow()
          .addComponents([jumpruins, icedisabled, jumpswamp])
          
          const swamprow = new MessageActionRow()
          .addComponents([jumpruins, jumpice, swampdisabled])
          
          const defaultrow = new MessageActionRow()
          .addComponents([jumpruins, jumpice, jumpswamp])

          let msg = ''

          switch(args[0]) {
            case "ruins":
                msg = await message.channel.send({  embeds: [newEmbedRuins], components: [ruinsrow]})
                break;

            case "lava":
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