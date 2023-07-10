const Discord = require('discord.js');
const prefixModel = require("../../schemas/prefix")
module.exports = {
	name: "icedungeon",
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

          const newEmbedIce = new Discord.MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Ice Dungeons**__\nThe ice dungeon type was the second to be added and is completely frozen over. The walls are covered in ice and the temperature is very cold.  There are vents on the ground that emit blasts of cold air that deals damage. This dungeon type has 3 main traps, the ice wall, ice jump, and ice axe. Most of the dungeon is a bit dark, being lit up with wall torches at certain points.\n\n**Ice Traps**\n\`${prefix2}wall ice\` - Information about ice wall trap\n\`${prefix2}jump ice\` - Information about ice jump trap\n\`${prefix2}axe ice\` - Information about the ice axe trap`)
          .setImage("https://cdn.discordapp.com/attachments/760287836074278963/836005644515278869/image2.png")
          
          const buttonRuins = new Discord.MessageButton()
          .setStyle("DANGER")
          .setLabel("Ruins Dungeon")
          .setCustomId("ruinsdungeon")

          const buttonIceDisabled = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel("Ice Dungeon")
          .setCustomId("icedungeon")
          .setDisabled(true)

          const buttonSwamp = new Discord.MessageButton()
          .setStyle("SUCCESS")
          .setLabel("Swamp Dungeon")
          .setCustomId("swampdungeon")

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

          const iceRow = new Discord.MessageActionRow()
          .addComponents([buttonRuins, buttonIceDisabled, buttonSwamp])

          const iceTraps = new Discord.MessageActionRow()
          .addComponents([wallice, jumpice, axeice])

          interaction.update({embeds: [newEmbedIce], components: [iceRow, iceTraps]})

    }
}