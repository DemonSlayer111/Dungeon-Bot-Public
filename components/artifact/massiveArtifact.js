const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "artifactmassive",
	execute(interaction) {


        const embedMassive = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Massive**__\n\n**Cave**\nLava Cave\n\n**Location**\nLat 67.0, Long 85.9")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895447984949567558/Massive_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895448006843834368/Artifact_of_the_Massive.png")

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


        const massiveButton = new MessageButton()
        .setCustomId("cavelava")
        .setLabel("Lava Cave")
        .setStyle("PRIMARY")

        const artifactRow = new MessageActionRow()
        .addComponents([artifactMenu])

        const massiveRow = new MessageActionRow()
        .addComponents([massiveButton])
        interaction.update({embeds: [embedMassive], components: [artifactRow, massiveRow]})
	},
};