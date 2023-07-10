const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "caveswamp",
	execute(interaction) {

        const embedSwamp = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Swamp Cave**__\n\n**Location**\nLat 62.7, Long 37.3\n\n**Overview**\nThe Swamp Cave is filled with fungus and cobwebs. Additionally, a poisonous gas is present in every part of the cave. This cave contains the Artifact of the Immune.\n\n**Threats**\nThe cave contains large quantities of Araneo and Pulmonoscorpius. These creatures are very high level and will quickly defeat unprepared players. There is also a powerful poison gas in that will take out any unprotected players.\n\n**Strategy**\nThe Araneo and Pulmonoscorpius found within the cave will quickly knock out survivors that are on their own. A mount is recommended to prevent torpor effects on the player. The inside of the cave is circular and can result in getting lost easily. Additionally, the poison gas will prevent unprotected players from completeing the cave. To prevent poison damage, several methods can be used. A gas mask, powered TEK Helmet, 3 pieces of SCUBA and 2 pieces of ghillie, or 4 pieces of SCUBA can be worn to negate the poison effect.To reach the artifact, keep left once entering the cave and take the left path when multiple options are presented. Upon reaching the circular room with a pool of shallow water in the middle, follow the path straight up to the artifact chamber. The path to the artifact can be retraced to exit the cave.")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895318051304661072/image0.png")

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

        const swampButton = new MessageButton()
        .setCustomId("artifactimmune")
        .setLabel("Artifact of the Immune")
        .setStyle("SECONDARY")
        .setEmoji("895049769540542504")
       
        const caveRow = new MessageActionRow()
        .addComponents([caveMenu])

        const swampRow = new MessageActionRow()
        .addComponents([swampButton])

        interaction.update({embeds: [embedSwamp], components: [caveRow, swampRow]})

	},
};