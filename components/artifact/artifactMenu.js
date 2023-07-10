const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "artifactmenu",
	execute(interaction) {

        const embedHunter = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Hunter**__\n\n**Cave**\nSouth Cave\n\n**Location**\nLat 83.5, Long 56.0")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895432761077268530/Hunter_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895419085117075496/Artifact_of_the_Hunter.png")

        const embedClever = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Clever**__\n\n**Cave**\nCentral Cave\n\n**Location**\nLat 39.5, Long 45.9")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895433175780696084/Clever_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895433292071985202/Artifact_of_the_Clever.png")

        const embedMassive = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Massive**__\n\n**Cave**\nLava Cave\n\n**Location**\nLat 67.0, Long 85.9")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895447984949567558/Massive_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895448006843834368/Artifact_of_the_Massive.png")

        const embedSkylord = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Skylord**__\n\n**Cave**\nNorthwest Cave\n\n**Location**\nLat 19.5, Long 18.3")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895454959859040327/Skylord_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895455008198377512/Artifact_of_the_Skylord.png")

        const embedStrong = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Artifact of the Strong**__\n\n**Cave**\nYeti Cave\n\n**Location**\nLat 29.9, Long 26.5")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895467104298496000/Strong_Tribute.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/760287836074278963/895467136129040394/Artifact_of_the_Strong.png")

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

        const hunterRow = new MessageActionRow()
        .addComponents([hunterButton])

        const cleverRow = new MessageActionRow()
        .addComponents([cleverButton])

        const massiveRow = new MessageActionRow()
        .addComponents([massiveButton])

        const skylordRow = new MessageActionRow()
        .addComponents([skylordButton])

        const strongRow = new MessageActionRow()
        .addComponents([strongButton])

        const immuneRow = new MessageActionRow()
        .addComponents([immuneButton])



        switch(interaction.values[0]) {
            case 'hunter':
                interaction.update({embeds: [embedHunter], components: [artifactRow, hunterRow]})
            break;
            case 'clever':
                interaction.update({embeds: [embedClever], components: [artifactRow, cleverRow]})
            break;
            case 'massive':
                interaction.update({embeds: [embedMassive], components: [artifactRow, massiveRow]})
            break;
            case 'skylord':
                interaction.update({embeds: [embedSkylord], components: [artifactRow, skylordRow]})
            break;
            case 'strong':
                interaction.update({embeds: [embedStrong], components: [artifactRow, strongRow]})
            break;
            case 'immune':
                interaction.update({embeds: [embedImmune], components: [artifactRow, immuneRow]})
            break;
            default: 
                interaction.update({embeds: [embed], components: [artifactRow]})
        }
	},
};