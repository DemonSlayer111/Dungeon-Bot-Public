const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "artifactimmune",
	execute(interaction) {


        const embedImmune = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Immune**__\n\n**Cave**\nSwamp Cave\n\n**Location**\nLat 62.1, Long 39.5")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895480626671669268/Immune_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895480642857492501/Artifact_of_the_Immune.png")

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


        const immuneButton = new MessageButton()
        .setCustomId("caveswamp")
        .setLabel("Swamp Cave")
        .setStyle("PRIMARY")

        const artifactRow = new MessageActionRow()
        .addComponents([artifactMenu])

        const immuneRow = new MessageActionRow()
        .addComponents([immuneButton])



        interaction.update({embeds: [embedImmune], components: [artifactRow, immuneRow]})
	},
};