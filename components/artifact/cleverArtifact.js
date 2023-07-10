const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "artifactclever",
	execute(interaction) {

        const embedClever = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Clever**__\n\n**Cave**\nCentral Cave\n\n**Location**\nLat 39.5, Long 45.9")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895433175780696084/Clever_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895433292071985202/Artifact_of_the_Clever.png")

        const artifactMenu = new MessageSelectMenu()
        .setCustomId('artifactmenu')
        .setPlaceholder("Select an artifact")
        .addOptions(
            [
                {
                    label: 'Artifact of the Hunter',
                    description: 'South Cave',
                    emoji: '895049769372758026',
                    value: 'hunter'
                },
                {
                    label: 'Artifact of the Clever',
                    description: 'Central Cave',
                    emoji: '895049769460858970',
                    value: 'clever'
                },
                {
                    label: 'Artifact of the Massive',
                    description: 'Lava Cave',
                    emoji: '895049769297268806',
                    value: 'massive'
                },
                {
                    label: 'Artifact of the Skylord',
                    description: 'Northwest Cave',
                    emoji: '895049769574084608',
                    value: 'skylord'
                },
                {
                    label: 'Artifact of the Strong',
                    description: 'Yeti Cave',
                    emoji: '895049769360175105',
                    value: 'strong'   
                },
                {
                    label: 'Artifact of the Immune',
                    description: 'Swamp Cave',
                    emoji: '895049769540542504',
                    value: 'immune'
                }
            ]
        )

        const hunterButton = new MessageButton()
        .setCustomId("cavesouth")
        .setLabel("South Cave")
        .setStyle("PRIMARY")

        const cleverButton = new MessageButton()
        .setCustomId("cavecentral")
        .setLabel("Central Cave")
        .setStyle("PRIMARY")

        const massiveButton = new MessageButton()
        .setCustomId("cavelava")
        .setLabel("Lava Cave")
        .setStyle("PRIMARY")

        const skylordButton = new MessageButton()
        .setCustomId("cavenorthwest")
        .setLabel("Northwest Cave")
        .setStyle("PRIMARY")

        const strongButton = new MessageButton()
        .setCustomId("caveyeti")
        .setLabel("Yeti Cave")
        .setStyle("PRIMARY")

        const immuneButton = new MessageButton()
        .setCustomId("caveswamp")
        .setLabel("Swamp Cave")
        .setStyle("PRIMARY")

        const artifactRow = new MessageActionRow()
        .addComponents([artifactMenu])

        const cleverRow = new MessageActionRow()
        .addComponents([cleverButton])


        interaction.update({embeds: [embedClever], components: [artifactRow, cleverRow]})
	},
};