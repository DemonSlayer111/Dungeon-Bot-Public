const Discord = require('discord.js');
const prefixModel = require("../../schemas/prefix")
module.exports = {
	name: "ruinsdungeon",
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

          const newEmbedRuins = new Discord.MessageEmbed()
          .setColor('#0e48b8')
          .setDescription(`__**Ruins Dungeons**__\nThe ruins dungeon type was the first to be introduced and resembles an abandoned labyrinth. This type of dungeon has 3 main traps, the ruins wall, lava jump, and ruins axe. Most of the dungeon is dark, being lit up with wall torches at certain points.\n\n**Ruins Traps**\n\`${prefix2}wall ruins\` - Information about ruins wall trap\n\`${prefix2}jump ruins\` - Information about lava jump trap\n\`${prefix2}axe ruins\` - Information about the ruins axe trap`)
          .setImage("https://cdn.discordapp.com/attachments/760287836074278963/836005643428823051/image1.png")

          const buttonRuinsDisabled = new Discord.MessageButton()
          .setStyle("DANGER")
          .setLabel("Ruins Dungeon")
          .setCustomId("ruinsdungeon")
          .setDisabled(true)

          
          const buttonIce = new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setLabel("Ice Dungeon")
          .setCustomId("icedungeon")

          const buttonSwamp = new Discord.MessageButton()
          .setStyle("SUCCESS")
          .setLabel("Swamp Dungeon")
          .setCustomId("swampdungeon")

          
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

          const ruinsRow = new Discord.MessageActionRow()
          .addComponents([buttonRuinsDisabled, buttonIce, buttonSwamp])

          const ruinsTraps = new Discord.MessageActionRow()
          .addComponents([wallruins, jumpruins, axeruins])

          interaction.update({embeds: [newEmbedRuins], components: [ruinsRow, ruinsTraps]})


    }
}