const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "cavelava",
	execute(interaction) {

        const embedLava = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Lava Cave**__\n\n**Location**\nLat 70.6, Long 86.1\n\n**Overview**\nThe lava cave is an intensely hot cave filled with pools of lava and crystals.  This cave contains the Artifact of the Massive.\n\n**Threats**\nAraneo, Dilophosaur, Onyc, and Pulmonoscorpius will be encountered frequently throughout the cave. Additionally, the intense heat of the cave will cause most players to overheat. There are also several pools of lava that will instantly kill players who fall in.\n\n**Strategy**\nThe heat of this cave can quickly dehydrate unsuspecting players and leave them susceptible to the creatures within. The pools of lava will also kill any players and creatures that fall in. To reach the artifact, follow the rightmost wall after entering the cave. There will be several gaps along the way that need to be cleared to progress. The player will automatically jump when approaching them. Near the artifact chamber, there are several platforms in the lava that must be navigated. To exit the cave, navigate back across the platforms and head left. Head right at the next opportunity and cross through the ruins. After crossing the ruins keep left and head up whenever possible.")
        .setImage("https://cdn.discordapp.com/attachments/813591120704438282/895105072839680040/image0.png")

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

        const lavaButton = new MessageButton()
        .setCustomId("artifactmassive")
        .setLabel("Artifact of the Massive")
        .setStyle("SECONDARY")
        .setEmoji("895049769297268806")
       
        const caveRow = new MessageActionRow()
        .addComponents([caveMenu])

        const lavaRow = new MessageActionRow()
        .addComponents([lavaButton])

        interaction.update({embeds: [embedLava], components: [caveRow, lavaRow]})

	},
};