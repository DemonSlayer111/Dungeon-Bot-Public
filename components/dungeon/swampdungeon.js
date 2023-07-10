const Discord = require('discord.js');
const prefixModel = require("../../schemas/prefix")
module.exports = {
	name: "swampdungeon",
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

          const newEmbedSwamp = new Discord.MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Swamp Dungeons**__\nThe swamp dungeon type was the third to be added and is covered in moss, fungi, or cobwebs on most surfaces. There are vents on the ground which emit poisonous gas and some walls shoot darts which cause a hallucinogenic effect. This dungeon type has 3 main traps, the swamp wall, swamp jump, and swamp axe. Most of the dungeon is very dark, being lit up with wall torches at certain points.\n\n**Swamp Traps**\n\`${prefix2}wall swamp\` - Information about swamp wall trap\n\`${prefix2}jump swamp\` - Information about swamp jump trap\n\`${prefix2}axe swamp\` - Information about the swamp axe trap`)
          .setImage("https://cdn.discordapp.com/attachments/760287836074278963/836005642263199784/image0.png")

          const buttonRuins = new Discord.MessageButton()
          .setStyle("DANGER")
          .setLabel("Ruins Dungeon")
          .setCustomId("ruinsdungeon")


          const buttonIce = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel("Ice Dungeon")
          .setCustomId("icedungeon")

          const buttonSwampDisabled = new Discord.MessageButton()
          .setStyle("SUCCESS")
          .setLabel("Swamp Dungeon")
          .setCustomId("swampdungeon")
          .setDisabled(true)

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

          const swampRow = new Discord.MessageActionRow()
          .addComponents([buttonRuins, buttonIce, buttonSwampDisabled])

          const swampTraps = new Discord.MessageActionRow()
          .addComponents([wallswamp, jumpswamp, axeswamp])


          interaction.update({embeds: [newEmbedSwamp], components: [swampRow, swampTraps]})

    }
}