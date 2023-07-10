const { MessageEmbed } = require('discord.js')
const prefixModel = require("../../schemas/prefix")
module.exports = {
	name: 'help',
	description: 'Get help with bot commands.',
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
          .setDescription(`__**Dungeon Bot Commands**__\n\n**Prefix**\nThe prefix for Dungeon Bot is \`${prefix2}\`\n\n**Configuration**\n\`${prefix2}help prefix\` - Instructions for changing the prefix of the bot\n\n**Current Dungeon**\n\`${prefix2}map\` - Displays information and a map for the current dungeon\n\n**General Information**\n\`${prefix2}help consumable\` - Lists commands related to consumable items\n\`${prefix2}help equipment\` - Lists commands related to equipment items\n\`${prefix2}help cave\` - Lists commands related to caves\n\`${prefix2}help artifact\` - Lists commands related to artifacts\n\n**Dungeon Information**\n\`${prefix2}help dungeon\` - Lists commands for general dungeon information\n\`${prefix2}help boss\` - Lists commands related to dungeon bosses\n\`${prefix2}help traps\` - Lists commands related to dungeon traps\n\`${prefix2}help threatroom\` - Lists commands related to threat rooms\n\n**Miscellaneous**\n\`${prefix2}ping\` - Displays bot and API latency\n\`${prefix2}invite\` - Invite the bot to your server or get support\n\`${prefix2}wiki\` - Search the ARK wiki`)
  
          const newEmbedPrefix = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Prefix**__\n\n\`${prefix2}setprefix <NewPrefix>\` - Change the prefix of the bot\n\n\n**Example**\n\`?setprefix !\` - Changes the prefix of the bot from \`?\` to \`!\`\n\n*NOTE: This command can only be used by members with the* \`ADMINISTRATOR\` *permission.*`)
  
          const newEmbedDungeon = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Dungeons**__ \n \n\`${prefix2}dungeon\` - Lists general information about Dungeons in ARK: Mobile \n \n\`${prefix2}dungeon ruins\` - Lists information about the ruins dungeon type \n\`${prefix2}dungeon ice\` - Lists information about the ice dungeon type \n\`${prefix2}dungeon swamp\` - Lists information about the swamp dungeon type`)
  
          const newEmbedBoss = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Bosses**__ \n \n\`${prefix2}boss\` - Lists general infomation about dungeon bosses \n \n\`${prefix2}boss megapithecus\` - Information and strategies for the Megapithecus Pestis boss \n\`${prefix2}boss broodgenetrix\` - Information and strategies for the Broodgenetrix boss \n\`${prefix2}boss beelzemorbus\` - Information and strategies for the Beelzemorbus boss \n\`${prefix2}boss cubozoa\` - Information and strategies for the Cubozoa Multis boss \n\`${prefix2}boss obsidioequus\` - Information and strategies for the Obsidioequus boss \n\`${prefix2}boss dodobitus\` - Information and strategies for the Dodobitus boss \n\`${prefix2}boss doedicurus\` - Information and strategies for the Doedicurus Vastus boss \n\`${prefix2}boss gula\` - Information and strategies for the Gula Beetle boss \n\`${prefix2}boss argentustus\` - Information and strategies for the Argentustus boss \n\`${prefix2}boss noctis\` - Information and strategies for the Noctis boss`)
  
          const newEmbedTraps = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Traps**__\n\n\`${prefix2}traps\` - Lists general information about dungeon traps\n\n\`${prefix2}help wall\` - Lists commands related to wall traps\n\`${prefix2}help jump\` - Lists commands related to jump traps\n\`${prefix2}help axe\` - Lists commands related to axe traps`)
  
          const newEmbedWall = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Wall Traps**__ \n \n\`${prefix2}wall\` - Lists general information about wall traps \n \n\`${prefix2}wall ruins\` - Displays information and strategies for completing ruins wall traps \n\`${prefix2}wall ice\` - Displays information and strategies for completing ice wall traps \n\`${prefix2}wall swamp\` - Displays information and strategies for completing swamp wall traps`)
  
          const newEmbedJump = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Jump Traps**__ \n \n\`${prefix2}jump\` - Lists general information about jump traps \n \n\`${prefix2}jump ruins\` - Displays information and strategies for completing ruins jump traps \n\`${prefix2}jump ice\` - Displays information and strategies for completing ice jump traps \n\`${prefix2}jump swamp\` - Displays information and strategies for completing swamp jump traps`)
  
          const newEmbedAxe = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Axe Traps**__ \n \n\`${prefix2}axe\` - Lists general information about axe traps \n \n\`${prefix2}axe ruins\` - Displays information and strategies for completing ruins axe traps \n\`${prefix2}axe ice\` - Displays information and strategies for completing ice axe traps \n\`${prefix2}axe swamp\` - Displays information and strategies for completing swamp axe traps  `)
  
          const newEmbedThreatRoom = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Threat Rooms**__ \n \n\`${prefix2}threatroom\` - Lists general information about threat rooms \n \n\`${prefix2}threatroom armorless\` - Information about the armor ineffective effect \n\`${prefix2}threatroom reduced\` - Information about the armor effectiveness reduced effect \n\`${prefix2}threatroom growing\` - Information about the growing effect \n\`${prefix2}threatroom juggernaut\` - Information about the juggernaut effect \n\`${prefix2}threatroom slowed\` - Information about the slowed effect \n\`${prefix2}threatroom turbo\` - Information about the turbo effect \n\`${prefix2}threatroom cold\` - Information about the temperature decreasing effect \n\`${prefix2}threatroom hot\` - Information about the temperature increasing effect`)
          
          const newEmbedConsumable = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Consumables**__\n\n\`${prefix2}consumable\` - General information about consumables\n\n\`${prefix2}consumable focal\` - Information about Focal Chili\n\`${prefix2}consumable lazarus\` - Information about Lazarus Chowder\n\`${prefix2}consumable enduro\` - Information about Enduro Stew\n\`${prefix2}consumable calien\` - Information about Calien Soup\n\`${prefix2}consumable fria\` - Information about Fria Curry\n\`${prefix2}consumable medical\` - Information about Medical Brews\n\`${prefix2}consumable energy\` - Information about Energy Brews\n\`${prefix2}consumable tartare\` - Information about Battle Tartare\n\`${prefix2}consumable mindwipe\` - Information about Mindwipe Tonics\n\`${prefix2}consumable hemostatic\` - Information about Hemostatic Serums\n\`${prefix2}consumable antidote\` - Information about Lesser Antidote\n\`${prefix2}consumable stimulant\` - Information about Stimulants`)

          const newEmbedEquipment = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Equipment**__\n\n\`${prefix2}equipment\` - General information about equipment\n\n\`${prefix2}equipment pump\` - Information about the Pump-Action Shotgun\n\`${prefix2}equipment shotgun\` - Information about the Shotgun\n\`${prefix2}equipment compound\` - Information about the Compound Bow\n\`${prefix2}equipment pike\` - Information about the Pike\n\`${prefix2}equipment sword\` - Information about the Sword\n\`${prefix2}equipment skillet\` - Information about the Iron Skillet\n\`${prefix2}equipment symbiote\` - Information about the Aerial Symbiote\n\`${prefix2}equipment frog\` - Information about Frog Feet\n\`${prefix2}equipment assault\` - Information about the Assault Rifle\n\`${prefix2}equipment shield\` - Information about the Riot Shield\n\`${prefix2}equipment flak\` - Information about Flak Armor\n\`${prefix2}equipment riot\` - Information about Riot Armor\n\`${prefix2}equipment ghillie\`\n - Information about Ghillie Armor\n\`${prefix2}equipment fur\` - Information about Fur Armor\n\`${prefix2}equipment tekrifle\` - Information about the TEK Rifle\n\`${prefix2}equipment tekshield\` - Information about the TEK Shield\n\`${prefix2}equipment tekarmor\` - Information about TEK Armor`)

          const newEmbedCave = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Caves**__\n\n\`${prefix2}cave\` - Lists general cave information\n\n\`${prefix2}cave south\` - Lists information for the South Cave\n\`${prefix2}cave central\` - Lists information for the Central Cave\n\`${prefix2}cave lava\` - Lists information for the Lava Cave\n\`${prefix2}cave northwest\` - Lists information for the Northwest Cave\n\`${prefix2}cave yeti\` - Lists information for the Yeti Cave\n\`${prefix2}cave swamp\` - Lists information for the Swamp Cave`)

          const newEmbedArtifact = new MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Artifacts**__\n\n\`${prefix2}artifact\` - Lists general artifact information\n\n\`${prefix2}artifact hunter\` - Lists information for the Artifact of the Hunter\n\`${prefix2}artifact clever\` - Lists information for the Artifact of the Clever\n\`${prefix2}artifact massive\` - Lists information for the Artifact of the Massive\n\`${prefix2}artifact skylord\` - Lists information for the Artifact of the Skylord\n\`${prefix2}artifact strong\` - Lists information for the Artifact of the Strong\n\`${prefix2}artifact immune\` - Lists information for the Artifact of the Immune`)
        
            switch(interaction.options._hoistedOptions[0]?.value){
                case "prefix":
                    return interaction.reply({embeds: [newEmbedPrefix]});
                break;
    
                case "dungeon":
                    return interaction.reply({embeds:[newEmbedDungeon]});
                break;
    
                case "consumable":
                    return interaction.reply({embeds:[newEmbedConsumable]});
                break;
    
                case "boss":
                    return interaction.reply({embeds:[newEmbedBoss]});
                break;
    
                case "traps":
                    return interaction.reply({embeds:[newEmbedTraps]});
                break;
    
                case "wall":
                    return interaction.reply({embeds:[newEmbedWall]});
                break;
    
                case "jump":
                    return interaction.reply({embeds:[newEmbedJump]});
                break;
    
                case "axe":
                    return interaction.reply({embeds:[newEmbedAxe]});
                break;
    
                case "threatroom":
                    return interaction.reply({embeds:[newEmbedThreatRoom]});
                break;

                case 'equipment':
                    return interaction.reply({embeds: [newEmbedEquipment]})
                break;
    
                case 'cave':
                    return interaction.reply({embeds: [newEmbedCave]})
                break;
    
                case 'artifact':
                    return interaction.reply({embeds: [newEmbedArtifact]})
                break;
                default: return interaction.reply({embeds:[newEmbed]});
            }
            
    

    

	},
};