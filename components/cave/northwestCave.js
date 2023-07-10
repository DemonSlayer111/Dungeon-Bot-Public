const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "cavenorthwest",
	execute(interaction) {

        const embedNorthwest = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Northwest Cave**__\n\n**Location**\nLat 19.3, Long 18.4\n\n**Overview**\nThe Northwest Cave is a small and icy cave with freezing temperatures. This cave contains the Artifact of the Skylord\n\n**Threats**\nAraneo and Onyc are found within the narrow hallways of the cave. There are several pits with ice spikes located throughout. Falling in one of these pits results in instant death.\n\n**Strategy**\nThe entrance to the cave is narrow, rideable creatures will not fit. The creatures inside can be defeated easily with a pike or sword. A grappling hook can also be brought to reach the artifact easily. To reach the artifact, one of two methods can be used. If a grappling hook is brought, keep right until a ledge is found. Grapple up to the ledge to reach the artifact. Without a grappling hook, head straight at the first intersection, then keep right when possible. To exit the cave drop down from the ledge and keep left when possible.")
        .setImage("https://cdn.discordapp.com/attachments/813591120704438282/895148126015483934/image0.png")

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

        const northwestButton = new MessageButton()
        .setCustomId("artifactskylord")
        .setLabel("Aritfact of the Skylord")
        .setStyle("SECONDARY")
        .setEmoji("895049769574084608")
       
        const caveRow = new MessageActionRow()
        .addComponents([caveMenu])

        const northwestRow = new MessageActionRow()
        .addComponents([northwestButton])

        interaction.update({embeds: [embedNorthwest], components: [caveRow, northwestRow]})

	},
};