const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "caveyeti",
	execute(interaction) {

        const embedYeti = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Yeti Cave**__\n\n**Location**\nLat 29.1, Long 31.8\n\n**Overview**\nThe Yeti Cave is a large, icy cave with cold temperatures and freezing water. This cave contains the Artifact of the Strong.\n\n**Threats**\nNumerous high level Dire Wolves, Onyc, and Yetis can be found through out the cave. High level Anglers and Sabertooth Salmon can be found within the water. The freezing water also damages players and creatures that swim in it.\n\n**Strategy**\nThe Dire Wolves and Yetis in the cave are incredibly dangerous and will quickly finish off unprepared players. A high level Dire Wolf is recommended for this cave. The path to the artifact chamber is long and full of turns. The best way to make it down is to head lower in elevation and deeper into the cave whenever possible. Some parts of the path have a crystal wall on the ground. These can be jumped over or harvested with a metal pick. The path down can be retraced to exit the cave.")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895170811210645504/image0.png")

        const caveMenu = new MessageSelectMenu()
        .setCustomId("cavemenu")
        .setPlaceholder("Select a cave")
        .addOptions(
            [
                {
                    label: 'South Cave',
                    description: 'Lat 80.3, Long 53.5',
                    value: 'south'
                },
                {
                    label: 'Central Cave',
                    description: 'Lat 41.5, Long 46.9',
                    value: 'central'
                },
                {
                    label: 'Lava Cave',
                    description: 'Lat 70.6, Long 86.1',
                    value: 'lava'
                },
                {
                    label: 'Northwest Cave',
                    description: 'Lat 19.3, Long 18.4',
                    value: 'northwest'
                },
                {
                    label: 'Yeti Cave',
                    description: 'Lat 29.1, Long 31.8',
                    value: 'yeti'
                },
                {
                    label: 'Swamp Cave',
                    description: 'Lat 62.7, Long 37.3',
                    value: 'swamp'
                }
            ]
        )

        const yetiButton = new MessageButton()
        .setCustomId("artifactstrong")
        .setLabel("Artifact of the Strong")
        .setStyle("SECONDARY")
        .setEmoji("895049769360175105")
       
        const caveRow = new MessageActionRow()
        .addComponents([caveMenu])

        const yetiRow = new MessageActionRow()
        .addComponents([yetiButton])

        interaction.update({embeds: [embedYeti], components: [caveRow, yetiRow]})

	},
};