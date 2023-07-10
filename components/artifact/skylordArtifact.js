const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "artifactskylord",
	execute(interaction) {

        const embedSkylord = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Skylord**__\n\n**Cave**\nNorthwest Cave\n\n**Location**\nLat 19.5, Long 18.3")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895454959859040327/Skylord_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895455008198377512/Artifact_of_the_Skylord.png")


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

        const skylordButton = new MessageButton()
        .setCustomId("cavenorthwest")
        .setLabel("Northwest Cave")
        .setStyle("PRIMARY")

        const artifactRow = new MessageActionRow()
        .addComponents([artifactMenu])

        const skylordRow = new MessageActionRow()
        .addComponents([skylordButton])

        interaction.update({embeds: [embedSkylord], components: [artifactRow, skylordRow]})
	},
};