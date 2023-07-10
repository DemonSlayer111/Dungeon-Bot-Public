const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "cavecentral",
	execute(interaction) {

        const embedCentral = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Central Cave**__\n\n**Location**\nLat 41.5, Long 46.9\n\n**Overview**\nThe Central Cave is filled with valuable resources and vegetation. A few pools of water can also be found near the artifact chamber. This cave contans the Artifact of the Clever\n\n**Threats**\nAraneo, Pulmonoscorpius, Onyc, and Titanoboa are found in abundance on land. Arthropleura can also be found within. In the pools of water, Sarcosuchus and large quantities of Megapiranha pose a threat in the water. Megalosaurus can also be found but is rare.\n\n**Strategy**\nThe creatures within the cave aren't much higher level than the surface, however they do tend to remain in groups. A small to medium size mount is recommended for dealing with these threats. To reach the artifact, follow the rightmost wall after entering the cave. The artifact is located on a stone platform above a pool of water. To exit the cave, follow the leftmost wall")
        .setImage("https://cdn.discordapp.com/attachments/813591120704438282/895092972444614697/image0.png")

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

        const centralButton = new MessageButton()
        .setCustomId('artifactclever')
        .setLabel("Artifact of the Clever")
        .setStyle("SECONDARY")
        .setEmoji("895049769460858970")

       
        const caveRow = new MessageActionRow()
        .addComponents([caveMenu])

        const centralRow = new MessageActionRow()
        .addComponents([centralButton])

        interaction.update({embeds: [embedCentral], components: [caveRow, centralRow]})

	},
};