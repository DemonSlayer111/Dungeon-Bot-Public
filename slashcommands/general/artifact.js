const { MessageEmbed, MessageSelectMenu, MessageButton, MessageActionRow } = require('discord.js');
const prefixModel = require('../../schemas/prefix');
module.exports = {
    name: 'artifact',
    description: 'Information about ARK Mobile Artifacts',
    async execute(interaction) {
        const data = await prefixModel.findOne({
            GuildID: interaction.guild.id,
        });

        const prefix2 = (() => {
            if (!data) return '?';
            else if (data) return data.Prefix;
        })();

        const embed = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '__**Artifacts**__\n\n**Overview**\nArtifacts are items found within the depths of caves on the island.  There are 6 artifacts available and each one has a corresponding cave in which it is located. Players may carry more than one artifact at a time, however only one of each artifact may be held at any given time.\n\n**Rewards**\nArtifacts reward players with different types of loot including: Items, Armor, Weapons, Blueprints, Ancient Amber, or Soothing Balms. Each artifact has its own set of rewards.\n\n**Tributing**\nArtifact rewards are claimed by taking the artifact to an obelisk and tributing it. Any obelisk may be used for tributing.'
            )
            .setImage('https://cdn.discordapp.com/attachments/760287836074278963/895418194204966963/image0.png');

        const embedHunter = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '__**Artifact of the Hunter**__\n\n**Cave**\nSouth Cave\n\n**Location**\nLat 83.5, Long 56.0'
            )
            .setImage('https://cdn.discordapp.com/attachments/760287836074278963/895432761077268530/Hunter_Tribute.png')
            .setThumbnail(
                'https://cdn.discordapp.com/attachments/760287836074278963/895419085117075496/Artifact_of_the_Hunter.png'
            );

        const embedClever = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '__**Artifact of the Clever**__\n\n**Cave**\nCentral Cave\n\n**Location**\nLat 39.5, Long 45.9'
            )
            .setImage('https://cdn.discordapp.com/attachments/760287836074278963/895433175780696084/Clever_Tribute.png')
            .setThumbnail(
                'https://cdn.discordapp.com/attachments/760287836074278963/895433292071985202/Artifact_of_the_Clever.png'
            );

        const embedMassive = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '__**Artifact of the Massive**__\n\n**Cave**\nLava Cave\n\n**Location**\nLat 67.0, Long 85.9'
            )
            .setImage(
                'https://cdn.discordapp.com/attachments/760287836074278963/895447984949567558/Massive_Tribute.png'
            )
            .setThumbnail(
                'https://cdn.discordapp.com/attachments/760287836074278963/895448006843834368/Artifact_of_the_Massive.png'
            );

        const embedSkylord = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '__**Artifact of the Skylord**__\n\n**Cave**\nNorthwest Cave\n\n**Location**\nLat 19.5, Long 18.3'
            )
            .setImage(
                'https://cdn.discordapp.com/attachments/760287836074278963/895454959859040327/Skylord_Tribute.png'
            )
            .setThumbnail(
                'https://cdn.discordapp.com/attachments/760287836074278963/895455008198377512/Artifact_of_the_Skylord.png'
            );

        const embedStrong = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '__**Artifact of the Strong**__\n\n**Cave**\nYeti Cave\n\n**Location**\nLat 29.9, Long 26.5'
            )
            .setImage('https://cdn.discordapp.com/attachments/760287836074278963/895467104298496000/Strong_Tribute.png')
            .setThumbnail(
                'https://cdn.discordapp.com/attachments/760287836074278963/895467136129040394/Artifact_of_the_Strong.png'
            );

        const embedImmune = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '__**Artifact of the Immune**__\n\n**Cave**\nSwamp Cave\n\n**Location**\nLat 62.1, Long 39.5'
            )
            .setImage('https://cdn.discordapp.com/attachments/760287836074278963/895480626671669268/Immune_Tribute.png')
            .setThumbnail(
                'https://cdn.discordapp.com/attachments/760287836074278963/895480642857492501/Artifact_of_the_Immune.png'
            );

        const artifactMenu = new MessageSelectMenu()
            .setCustomId('artifactmenu')
            .setPlaceholder('Select an artifact')
            .addOptions([
                {
                    label: 'Artifact of the Hunter',
                    description: 'South Cave',
                    emoji: '895049769372758026',
                    value: 'hunter',
                },
                {
                    label: 'Artifact of the Clever',
                    description: 'Central Cave',
                    emoji: '895049769460858970',
                    value: 'clever',
                },
                {
                    label: 'Artifact of the Massive',
                    description: 'Lava Cave',
                    emoji: '895049769297268806',
                    value: 'massive',
                },
                {
                    label: 'Artifact of the Skylord',
                    description: 'Northwest Cave',
                    emoji: '895049769574084608',
                    value: 'skylord',
                },
                {
                    label: 'Artifact of the Strong',
                    description: 'Yeti Cave',
                    emoji: '895049769360175105',
                    value: 'strong',
                },
                {
                    label: 'Artifact of the Immune',
                    description: 'Swamp Cave',
                    emoji: '895049769540542504',
                    value: 'immune',
                },
            ]);

        const hunterButton = new MessageButton().setCustomId('cavesouth').setLabel('South Cave').setStyle('PRIMARY');

        const cleverButton = new MessageButton()
            .setCustomId('cavecentral')
            .setLabel('Central Cave')
            .setStyle('PRIMARY');

        const massiveButton = new MessageButton().setCustomId('cavelava').setLabel('Lava Cave').setStyle('PRIMARY');

        const skylordButton = new MessageButton()
            .setCustomId('cavenorthwest')
            .setLabel('Northwest Cave')
            .setStyle('PRIMARY');

        const strongButton = new MessageButton().setCustomId('caveyeti').setLabel('Yeti Cave').setStyle('PRIMARY');

        const immuneButton = new MessageButton().setCustomId('caveswamp').setLabel('Swamp Cave').setStyle('PRIMARY');

        const artifactRow = new MessageActionRow().addComponents([artifactMenu]);

        const hunterRow = new MessageActionRow().addComponents([hunterButton]);

        const cleverRow = new MessageActionRow().addComponents([cleverButton]);

        const massiveRow = new MessageActionRow().addComponents([massiveButton]);

        const skylordRow = new MessageActionRow().addComponents([skylordButton]);

        const strongRow = new MessageActionRow().addComponents([strongButton]);

        const immuneRow = new MessageActionRow().addComponents([immuneButton]);

        let msg = '';
        switch (interaction.options._hoistedOptions[0]?.value) {
            case 'hunter':
                msg = await interaction.reply({
                    embeds: [embedHunter],
                    components: [artifactRow, hunterRow],
                    fetchReply: true,
                });
                break;
            case 'clever':
                msg = await interaction.reply({
                    embeds: [embedClever],
                    components: [artifactRow, cleverRow],
                    fetchReply: true,
                });
                break;
            case 'massive':
                msg = await interaction.reply({
                    embeds: [embedMassive],
                    components: [artifactRow, massiveRow],
                    fetchReply: true,
                });
                break;
            case 'skylord':
                msg = await interaction.reply({
                    embeds: [embedSkylord],
                    components: [artifactRow, skylordRow],
                    fetchReply: true,
                });
                break;
            case 'strong':
                msg = await interaction.reply({
                    embeds: [embedStrong],
                    components: [artifactRow, strongRow],
                    fetchReply: true,
                });
                break;
            case 'immune':
                msg = await interaction.reply({
                    embeds: [embedImmune],
                    components: [artifactRow, immuneRow],
                    fetchReply: true,
                });
                break;
            default:
                msg = await interaction.reply({ embeds: [embed], components: [artifactRow], fetchReply: true });
        }
        const filter = (i) => i.user.id === interaction.user.id;
        const collector = msg.createMessageComponentCollector({ filter, idle: 30000 });
        collector.on('collect', (i) => {
            const component = interaction.client.components.get(i.customId);
            component.execute(i);
        });
        collector.on('end', (collected) => {
            interaction.editReply({ components: [] });
        });
    },
};
