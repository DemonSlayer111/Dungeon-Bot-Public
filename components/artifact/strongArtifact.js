const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "artifactstrong",
	execute(interaction) {

        const embedStrong = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Strong**__\n\n**Cave**\nYeti Cave\n\n**Location**\nLat 29.9, Long 26.5")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895467104298496000/Strong_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895467136129040394/Artifact_of_the_Strong.png")

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

        const strongButton = new MessageButton()
        .setCustomId("caveyeti")
        .setLabel("Yeti Cave")
        .setStyle("PRIMARY")

        const artifactRow = new MessageActionRow()
        .addComponents([artifactMenu])

        const strongRow = new MessageActionRow()
        .addComponents([strongButton])


        interaction.update({embeds: [embedStrong], components: [artifactRow, strongRow]})
	},
};