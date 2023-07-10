const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
	name: "cavemenu",
	execute(interaction) {

        const embedSouth = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**South Cave**__\n\n**Location**\nLat 80.3, Long 53.5 \n\n**Overview**\nThe South Cave contains several valuable resources, including crystal and obsidian. There is also an abundance of vegetation. Within the cave are several pools of water, some of which may house loot crates. This cave contains the Artifact of the Hunter. \n\n**Threats**\nSeveral aggressive creatures are found within the cave. Araneo, Pulmonoscorpius, and Titanoboa are encountered frequently throughout the cave, quickly knocking out unsuspecting players. Arthropleura can occasionally be within the cave.\n\n**Strategy**\nThe creatures within the cave aren't much higher in level than surface creatures, so it can be completed on foot fairly easily. A small to medium size mount such as a dire wolf can also be used to take out any threats. To reach the artifact, keep left after entering the cave until ledge is encountered. After jumping down, head straight to reach the artifact chamber. To leave, simply return using the same path. Keep left at the ledge to climb it.")
        .setImage("https://cdn.discordapp.com/attachments/813591120704438282/895077407843811388/image0.png")

        const embedCentral = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Central Cave**__\n\n**Location**\nLat 41.5, Long 46.9\n\n**Overview**\nThe Central Cave is filled with valuable resources and vegetation. A few pools of water can also be found near the artifact chamber. This cave contans the Artifact of the Clever\n\n**Threats**\nAraneo, Pulmonoscorpius, Onyc, and Titanoboa are found in abundance on land. Arthropleura can also be found within. In the pools of water, Sarcosuchus and large quantities of Megapiranha pose a threat in the water. Megalosaurus can also be found but is rare.\n\n**Strategy**\nThe creatures within the cave aren't much higher level than the surface, however they do tend to remain in groups. A small to medium size mount is recommended for dealing with these threats. To reach the artifact, follow the rightmost wall after entering the cave. The artifact is located on a stone platform above a pool of water. To exit the cave, follow the leftmost wall")
        .setImage("https://cdn.discordapp.com/attachments/813591120704438282/895092972444614697/image0.png")

        const embedLava = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Lava Cave**__\n\n**Location**\nLat 70.6, Long 86.1\n\n**Overview**\nThe lava cave is an intensely hot cave filled with pools of lava and crystals.  This cave contains the Artifact of the Massive.\n\n**Threats**\nAraneo, Dilophosaur, Onyc, and Pulmonoscorpius will be encountered frequently throughout the cave. Additionally, the intense heat of the cave will cause most players to overheat. There are also several pools of lava that will instantly kill players who fall in.\n\n**Strategy**\nThe heat of this cave can quickly dehydrate unsuspecting players and leave them susceptible to the creatures within. The pools of lava will also kill any players and creatures that fall in. To reach the artifact, follow the rightmost wall after entering the cave. There will be several gaps along the way that need to be cleared to progress. The player will automatically jump when approaching them. Near the artifact chamber, there are several platforms in the lava that must be navigated. To exit the cave, navigate back across the platforms and head left. Head right at the next opportunity and cross through the ruins. After crossing the ruins keep left and head up whenever possible.")
        .setImage("https://cdn.discordapp.com/attachments/813591120704438282/895105072839680040/image0.png")

        const embedNorthwest = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Northwest Cave**__\n\n**Location**\nLat 19.3, Long 18.4\n\n**Overview**\nThe Northwest Cave is a small and icy cave with freezing temperatures. This cave contains the Artifact of the Skylord\n\n**Threats**\nAraneo and Onyc are found within the narrow hallways of the cave. There are several pits with ice spikes located throughout. Falling in one of these pits results in instant death.\n\n**Strategy**\nThe entrance to the cave is narrow, rideable creatures will not fit. The creatures inside can be defeated easily with a pike or sword. A grappling hook can also be brought to reach the artifact easily. To reach the artifact, one of two methods can be used. If a grappling hook is brought, keep right until a ledge is found. Grapple up to the ledge to reach the artifact. Without a grappling hook, head straight at the first intersection, then keep right when possible. To exit the cave drop down from the ledge and keep left when possible.")
        .setImage("https://cdn.discordapp.com/attachments/813591120704438282/895148126015483934/image0.png")

        const embedYeti = new MessageEmbed()
        .setColor('#0e48b8')
        .setDescription("__**Yeti Cave**__\n\n**Location**\nLat 29.1, Long 31.8\n\n**Overview**\nThe Yeti Cave is a large, icy cave with cold temperatures and freezing water. This cave contains the Artifact of the Strong.\n\n**Threats**\nNumerous high level Dire Wolves, Onyc, and Yetis can be found through out the cave. High level Anglers and Sabertooth Salmon can be found within the water. The freezing water also damages players and creatures that swim in it.\n\n**Strategy**\nThe Dire Wolves and Yetis in the cave are incredibly dangerous and will quickly finish off unprepared players. A high level Dire Wolf is recommended for this cave. The path to the artifact chamber is long and full of turns. The best way to make it down is to head lower in elevation and deeper into the cave whenever possible. Some parts of the path have a crystal wall on the ground. These can be jumped over or harvested with a metal pick. The path down can be retraced to exit the cave.")
        .setImage("https://cdn.discordapp.com/attachments/760287836074278963/895170811210645504/image0.png")

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

        const southButton = new MessageButton()
        .setCustomId('artifacthunter')
        .setLabel("Artifact of the Hunter")
        .setStyle("SECONDARY")
        .setEmoji("895049769372758026")

        const centralButton = new MessageButton()
        .setCustomId('artifactclever')
        .setLabel("Artifact of the Clever")
        .setStyle("SECONDARY")
        .setEmoji("895049769460858970")

        const lavaButton = new MessageButton()
        .setCustomId("artifactmassive")
        .setLabel("Artifact of the Massive")
        .setStyle("SECONDARY")
        .setEmoji("895049769297268806")

        const northwestButton = new MessageButton()
        .setCustomId("artifactskylord")
        .setLabel("Aritfact of the Skylord")
        .setStyle("SECONDARY")
        .setEmoji("895049769574084608")

        const yetiButton = new MessageButton()
        .setCustomId("artifactstrong")
        .setLabel("Artifact of the Strong")
        .setStyle("SECONDARY")
        .setEmoji("895049769360175105")

        const swampButton = new MessageButton()
        .setCustomId("artifactimmune")
        .setLabel("Artifact of the Immune")
        .setStyle("SECONDARY")
        .setEmoji("895049769540542504")

        const caveRow = new MessageActionRow()
        .addComponents([caveMenu])

        const southRow = new MessageActionRow()
        .addComponents([southButton])

        const centralRow = new MessageActionRow()
        .addComponents([centralButton])

        const lavaRow = new MessageActionRow()
        .addComponents([lavaButton])

        const northwestRow = new MessageActionRow()
        .addComponents([northwestButton])

        const yetiRow = new MessageActionRow()
        .addComponents([yetiButton])

        const swampRow = new MessageActionRow()
        .addComponents([swampButton])

        switch(interaction.values[0]){
            case 'south':
                interaction.update({embeds: [embedSouth], components: [caveRow, southRow]})
            break;
            case "central":
                interaction.update({embeds: [embedCentral], components: [caveRow, centralRow]})
            break;
            case 'lava':
                interaction.update({embeds: [embedLava], components: [caveRow, lavaRow]})
            break;
            case 'northwest':
                interaction.update({embeds: [embedNorthwest], components: [caveRow, northwestRow]})
            break;
            case 'yeti':
                interaction.update({embeds: [embedYeti], components: [caveRow, yetiRow]})
            break;
            case 'swamp':
                interaction.update({embeds: [embedSwamp], components: [caveRow, swampRow]})
            break;
        }

	},
};