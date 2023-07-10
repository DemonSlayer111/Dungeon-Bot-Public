const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "cavesouth",
	execute(interaction) {

        const embedSouth = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**South Cave**__\n\n**Location**\nLat 80.3, Long 53.5 \n\n**Overview**\nThe South Cave contains several valuable resources, including crystal and obsidian. There is also an abundance of vegetation. Within the cave are several pools of water, some of which may house loot crates. This cave contains the Artifact of the Hunter. \n\n**Threats**\nSeveral aggressive creatures are found within the cave. Araneo, Pulmonoscorpius, and Titanoboa are encountered frequently throughout the cave, quickly knocking out unsuspecting players. Arthropleura can occasionally be within the cave.\n\n**Strategy**\nThe creatures within the cave aren't much higher in level than surface creatures, so it can be completed on foot fairly easily. A small to medium size mount such as a dire wolf can also be used to take out any threats. To reach the artifact, keep left after entering the cave until ledge is encountered. After jumping down, head straight to reach the artifact chamber. To leave, simply return using the same path. Keep left at the ledge to climb it.")
        .setImage("https://cdn.discordapp.com/attachments/813591120704438282/895077407843811388/image0.png")

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

        const southButton = new MessageButton()
        .setCustomId('artifacthunter')
        .setLabel("Artifact of the Hunter")
        .setStyle("SECONDARY")
        .setEmoji("895049769372758026")

       
        const caveRow = new MessageActionRow()
        .addComponents([caveMenu])

        const southRow = new MessageActionRow()
        .addComponents([southButton])

        interaction.update({embeds: [embedSouth], components: [caveRow, southRow]})

	},
};