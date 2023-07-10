const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "artifacthunter",
	execute(interaction) {

        const embedHunter = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Hunter**__\n\n**Cave**\nSouth Cave\n\n**Location**\nLat 83.5, Long 56.0")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895432761077268530/Hunter_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895419085117075496/Artifact_of_the_Hunter.png")

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

        const artifactRow = new MessageActionRow()
        .addComponents([artifactMenu])

        const hunterRow = new MessageActionRow()
        .addComponents([hunterButton])

        interaction.update({embeds: [embedHunter], components: [artifactRow, hunterRow]})
	},
};