const { MessageEmbed, MessageSelectMenu, MessageActionRow } = require('discord.js');
const prefixModel = require('../../schemas/prefix');
module.exports = {
    name: 'map',
    description: "Displays this week's dungeon map.",
    async execute(message, args) {
        const data = await prefixModel.findOne({
            GuildID: message.guild.id,
        });

        const prefix2 = (() => {
            if (!data) return '?';
            else if (data) return data.Prefix;
        })();

        const embed = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                `__**[Blitz Week](https://ark.fandom.com/wiki/Dungeons_(Mobile)#Blitz_Week)**__\nIt is currently blitz week. Element rewards and noctis chance are doubled. Starting time is halved.\n\n**[The Mysterious Moss-Pit](https://ark.fandom.com/wiki/Dungeons_(Mobile)#The_Mysterious_Moss-Pit)**\nDate: December 7, 2021\n\`​${prefix2}map 1\`​ for more info\n\n**[RMX: Cemetary of Chaos](https://ark.fandom.com/wiki/Dungeons_(Mobile)#RMX:_Cemetary_of_Chaos)**\nDate: December 8, 2021\n\`​${prefix2}map 2\`​ for more info\n\n**[Labyrinth of the Frozen Army](https://ark.fandom.com/wiki/Dungeons_(Mobile)#Labyrinth_of_the_Frozen_Army)**\nDate: December 9, 2021\n\`​${prefix2}map 3\`​ for more info\n\n**[Netcaster of the Gloom](https://ark.fandom.com/wiki/Dungeons_(Mobile)#Netcaster_of_the_Gloom)**\nDate: December 10, 2021\n\`​${prefix2}map 4\`​ for more info\n\n**[RMX: Decaying Halls of Despair](https://ark.fandom.com/wiki/Dungeons_(Mobile)#RMX:_Decaying_Halls_of_Despair)**\nDate: December 11, 2021\n\`​${prefix2}map 5\`​ for more info\n\n**[The Wondering Vault](https://ark.fandom.com/wiki/Dungeons_(Mobile)#The_Wondering_Vault)**\nDate: December 12, 2021\n\`​${prefix2}map 6\`​ for more info\n\n**[RMX: The Quickening](https://ark.fandom.com/wiki/Dungeons_(Mobile)#RMX:_The_Quickening)**\nDate: December 13, 2021\n\`​${prefix2}map 7\`​ for more info`
            );

        const embed1 = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '**__[The Mysterious Moss-Pit](https://ark.fandom.com/wiki/Dungeons_(Mobile)#The_Mysterious_Moss-Pit)__**\n*Look out for each other.*\n\n**Date:** December 7, 2021\n**Type:** Swamp\n**Difficulty:** Medium\n**Featured Loot:** [Ascendant Crossbow](https://ark.fandom.com/wiki/Crossbow), [Journeyman Megalodon TEK Saddle](https://ark.fandom.com/wiki/Megalodon_Tek_Saddle), [TEK Leggings](https://ark.fandom.com/wiki/Tek_Leggings), [TEK SCUBA Mask](https://ark.fandom.com/wiki/TEK_SCUBA_Mask_(Mobile))\n**Eerie Creatures:** [Eerie Achatina](https://ark.fandom.com/wiki/Achatina), [Eerie Argentavis](https://ark.fandom.com/wiki/Argentavis), [Eerie Diplocaulus](https://ark.fandom.com/wiki/Diplocaulus), [Eerie Lystrosaurus](https://ark.fandom.com/wiki/Lystrosaurus), [Eerie Onyc](https://ark.fandom.com/wiki/Onyc), [Eerie Raptor](https://ark.fandom.com/wiki/Raptor), [Eerie Stego](https://ark.fandom.com/wiki/Stegosaurus), [Eerie Troodon](https://ark.fandom.com/wiki/Troodon)\n**Boss:** [Obsidioequus](https://ark.fandom.com/wiki/Obsidioequus)'
            )
            .setImage(
                'https://cdn.discordapp.com/attachments/826670986618732614/917868827201654814/The_Mysterious_Moss-Pit.png'
            );

        const embed2 = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '**__[RMX: Cemetary of Chaos](https://ark.fandom.com/wiki/Dungeons_(Mobile)#RMX:_Cemetary_of_Chaos)__**\n*Abandon all hope.*\n\n**Date:** December 8, 2021\n**Type:** Ruins\n**Difficulty:**Medium\n**Featured Loot:** [Ascendant Pump-Action Shotgun](https://ark.fandom.com/wiki/Pump-Action_Shotgun), [Journeyman TEK Chestpiece](https://ark.fandom.com/wiki/Tek_Chestpiece), [TEK Generator](https://ark.fandom.com/wiki/Tek_Generator), [TEK Shield](https://ark.fandom.com/wiki/Tek_Shield)\n**Eerie Creatures:** [Eerie Achatina](https://ark.fandom.com/wiki/Achatina), [Eerie Araneo](https://ark.fandom.com/wiki/Araneo), [Eerie Argentavis](https://ark.fandom.com/wiki/Argentavis), [Eerie Beelzebufo](https://ark.fandom.com/wiki/Beelzebufo), [Eerie Dodo](https://ark.fandom.com/wiki/Dodo), [Eerie Equus](https://ark.fandom.com/wiki/Equus), [Eerie Gigantopithecus](https://ark.fandom.com/wiki/Gigantopithecus), [Eerie Jerboa](https://ark.fandom.com/wiki/Jerboa), [Eerie Meganeura](https://ark.fandom.com/wiki/Meganeura), [Eerie Mesopithecus](https://ark.fandom.com/wiki/Mesopithecus), [Eerie Onyc](https://ark.fandom.com/wiki/Onyc), [Eerie Titanomyrma Soldier](https://ark.fandom.com/wiki/Titanomyrma)\n**Boss:** [Beelzemorbus](https://ark.fandom.com/wiki/Beelzemorbus)'
            )
            .setImage(
                'https://cdn.discordapp.com/attachments/826670986618732614/917871909578895401/RMX_Cemetary_of_Chaos.png'
            );

        const embed3 = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '**__[Labyrinth of the Frozen Army](https://ark.fandom.com/wiki/Dungeons_(Mobile)#Labyrinth_of_the_Frozen_Army)__**\n*The march goes on*\n\n**Date:** December 9, 2021\n**Type:** Ice\n**Difficulty:** Hard\n**Featured Loot:** [Ascendant Fur Cap](https://ark.fandom.com/wiki/Fur_Cap), [Journeyman TEK Chestpiece](https://ark.fandom.com/wiki/Tek_Chestpiece), [TEK Rifle](https://ark.fandom.com/wiki/Tek_Rifle), [TEK Sleeping Pod](https://ark.fandom.com/wiki/Tek_Sleeping_Pod_(Aberration))\n**Eerie Creatures:** [Eerie Achatina](https://ark.fandom.com/wiki/Achatina), [Eerie Allosaurus](https://ark.fandom.com/wiki/Allosaurus), [Eerie Araneo](https://ark.fandom.com/wiki/Araneo), [Eerie Arthropluera](https://ark.fandom.com/wiki/Arthropluera), [Eerie Diplocaulus](https://ark.fandom.com/wiki/Diplocaulus), [Eerie Dire Bear](https://ark.fandom.com/wiki/Dire_Bear), [Eerie Dire Wolf](https://ark.fandom.com/wiki/Direwolf), [Eerie Dodo](https://ark.fandom.com/wiki/Dodo), [Eerie Gigantopithecus](https://ark.fandom.com/wiki/Gigantopithecus), [Eerie Iguanodon](https://ark.fandom.com/wiki/Iguanodon), [Eerie Lystrosaurus](https://ark.fandom.com/wiki/Lystrosaurus), [Eerie Mesopithecus](https://ark.fandom.com/wiki/Mesopithecus), [Eerie Titanoboa](https://ark.fandom.com/wiki/Titanoboa), [Eerie Troodon](https://ark.fandom.com/wiki/Troodon)\n**Boss:** [Cubozoa Multis](https://ark.fandom.com/wiki/Cubozoa_Multis)'
            )
            .setImage(
                'https://cdn.discordapp.com/attachments/826670986618732614/917873735837556746/Labyrinth_of_the_Frozen_Army.png'
            );

        const embed4 = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '**__[Netcaster of the Gloom](https://ark.fandom.com/wiki/Dungeons_(Mobile)#Netcaster_of_the_Gloom)__**\n*So many legs*\n\n**Date:** Decempber 10, 2021\n**Type:** Ruins\n**Difficulty:** Easy\n**Featured Loot:** [Ascendant Ghillie Chestpiece](https://ark.fandom.com/wiki/Ghillie_Chestpiece), [Journeyman TEK Leggings](https://ark.fandom.com/wiki/Tek_Leggings), [TEK Teleporter](https://ark.fandom.com/wiki/Tek_Teleporter), [Megalodon TEK Saddle](https://ark.fandom.com/wiki/Megalodon_Tek_Saddle)\n**Eerie Creatures:** [Eerie Araneo](https://ark.fandom.com/wiki/Araneo), [Eerie Arthropluera](https://ark.fandom.com/wiki/Arthropluera), [Eerie Diplocaulus](https://ark.fandom.com/wiki/Diplocaulus), [Eerie Gigantopithecus](https://ark.fandom.com/wiki/Gigantopithecus), [Eerie Mesopithecus](https://ark.fandom.com/wiki/Mesopithecus), [Eerie Moschops](https://ark.fandom.com/wiki/Moschops), [Eerie Pelagornis](https://ark.fandom.com/wiki/Pelagornis), [Eerie Titanoboa](https://ark.fandom.com/wiki/Titanoboa)\n**Boss:** [Broodgenetrix](https://ark.fandom.com/wiki/Broodgenetrix)'
            )
            .setImage(
                'https://cdn.discordapp.com/attachments/826670986618732614/917886061785542696/Netcaster_of_the_Gloom.png'
            );

        const embed5 = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '**__[RMX: Decaying Halls of Despair](https://ark.fandom.com/wiki/Dungeons_(Mobile)#RMX:_Decaying_Halls_of_Despair)__**\n*A hero never gives up.*\n\n**Date:** December 11, 2021\n**Type:** Swamp\n**Difficulty:** Easy\n**Featured Loot:** [Ascendant Flak Chestpiece](https://ark.fandom.com/wiki/Flak_Chestpiece), [Journeyman TEK Helmet](https://ark.fandom.com/wiki/Tek_Helmet), [TEK Grenade](https://ark.fandom.com/wiki/Tek_Grenade), [TEK Kibble Processor](https://ark.fandom.com/wiki/TEK_Kibble_Processor_(Mobile))\n**Eerie Creatures:** [Eerie Argentavis](https://ark.fandom.com/wiki/Argentavis), [Eerie Compy](https://ark.fandom.com/wiki/Compy), [Eerie Dodo](https://ark.fandom.com/wiki/Dodo), [Eerie Gallimimus](https://ark.fandom.com/wiki/Gallimimus), [Eerie Mammoth](https://ark.fandom.com/wiki/Mammoth), [Eerie Moschops](https://ark.fandom.com/wiki/Moschops), [Eerie Oviraptor](https://ark.fandom.com/wiki/Oviraptor), [Eerie Woolly Rhino](https://ark.fandom.com/wiki/Woolly_Rhino)\n**Boss:** [Doedicurus Vastus](https://ark.fandom.com/wiki/Doedicurus_Vastus)'
            )
            .setImage(
                'https://cdn.discordapp.com/attachments/826670986618732614/917892912442929162/RMX_Decaying_Halls_of_Despair.png'
            );

        const embed6 = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '**__[The Wondering Vault](https://ark.fandom.com/wiki/Dungeons_(Mobile)#The_Wondering_Vault)__**\n*Feast on this*\n\n**Date:** December 12, 2021\n**Type:** Ruins\n**Difficulty:** Easy\n**Featured Loot:** [Ascendant Crossbow](https://ark.fandom.com/wiki/Crossbow), [Journeyman Tapejara TEK Saddle](https://ark.fandom.com/wiki/Tapejara_Tek_Saddle), [TEK Chestpiece](https://ark.fandom.com/wiki/Tek_Chestpiece), [TEK SCUBA Mask](https://ark.fandom.com/wiki/TEK_SCUBA_Mask_(Mobile))\n**Eerie Creatures:** [Eerie Argentavis](https://ark.fandom.com/wiki/Argentavis), [Eerie Dimorphodon](https://ark.fandom.com/wiki/Dimorphodon), [Eerie Dodo](https://ark.fandom.com/wiki/Dodo), [Eerie Kairuku](https://ark.fandom.com/wiki/Kairuku), [Eerie Onyc](https://ark.fandom.com/wiki/Onyc), [Eerie Pelagornis](https://ark.fandom.com/wiki/Pelagornis), [Eerie Pteranodon](https://ark.fandom.com/wiki/Pteranodon), [Eerie Titanomyrma Soldier](https://ark.fandom.com/wiki/Titanomyrma)\n**Boss:** [Argentustus](https://ark.fandom.com/wiki/Argentustus)'
            )
            .setImage(
                'https://cdn.discordapp.com/attachments/826670986618732614/917894068355366932/The_Wondering_Vault.png'
            );

        const embed7 = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(
                '**__[RMX: The Quickening](https://ark.fandom.com/wiki/Dungeons_(Mobile)#RMX:_The_Quickening)__**\n*Godspeed.*\n\n**Date:** December 13, 2021\n**Type:** Swamp\n**Difficulty:** Brutal\n**Featured Loot:** [Ascendant Sword](https://ark.fandom.com/wiki/Sword), [Journeyman Megalodon TEK Saddle](https://ark.fandom.com/wiki/Megalodon_Tek_Saddle), [TEK Rifle](https://ark.fandom.com/wiki/Tek_Rifle), [TEK Kibble Processor](https://ark.fandom.com/wiki/TEK_Kibble_Processor_(Mobile))\n**Eerie Creatures:** [Eerie Archaeopteryx](https://ark.fandom.com/wiki/Archaeopteryx), [Eerie Arthropluera](https://ark.fandom.com/wiki/Arthropluera), [Eerie Dimetrodon](https://ark.fandom.com/wiki/Dimetrodon), [Eerie Megaloceros](https://ark.fandom.com/wiki/Megaloceros), [Eerie Megatherium](https://ark.fandom.com/wiki/Megatherium), [Eerie Raptor](https://ark.fandom.com/wiki/Raptor), [Eerie Tapejara](https://ark.fandom.com/wiki/Tapejara), [Eerie Troodon](https://ark.fandom.com/wiki/Troodon)\n**Boss:** [Megapithecus Pestis](https://ark.fandom.com/wiki/Megapithecus_Pestis)'
            )
            .setImage(
                'https://cdn.discordapp.com/attachments/826670986618732614/917894405271220244/RMX_The_Quickening.png'
            );

        const menu = new MessageSelectMenu()
            .setCustomId('map-menu')
            .setPlaceholder('Select a map')
            .addOptions([
                {
                    label: 'The Mysterious Moss-Pit',
                    value: '1',
                    description: 'December 7, 2021',
                    emoji: '1️⃣',
                },
                {
                    label: 'RMX: Cemetary of Chaos',
                    value: '2',
                    description: 'December 8, 2021',
                    emoji: '2️⃣',
                },
                {
                    label: 'Labyrinth of the Frozen Army',
                    value: '3',
                    description: 'December 9, 2021',
                    emoji: '3️⃣',
                },
                {
                    label: 'Netcaster of the Gloom',
                    value: '4',
                    description: 'December 10, 2021',
                    emoji: '4️⃣',
                },
                {
                    label: 'RMX: Decaying Halls of Despair',
                    value: '5',
                    description: 'December 11, 2021',
                    emoji: '5️⃣',
                },
                {
                    label: 'The Wondering Vault',
                    value: '6',
                    description: 'December 12, 2021',
                    emoji: '6️⃣',
                },
                {
                    label: 'RMX: The Quickening',
                    value: '7',
                    description: 'December 13, 2021',
                    emoji: '7️⃣',
                },
            ]);

        const rowMenu = new MessageActionRow().addComponents([menu]);

        let msg = '';

        switch (args[0]) {
            case '1':
                msg = await message.channel.send({ embeds: [embed1], components: [rowMenu] });
                break;

            case '2':
                msg = await message.channel.send({ embeds: [embed2], components: [rowMenu] });
                break;

            case '3':
                msg = await message.channel.send({ embeds: [embed3], components: [rowMenu] });
                break;

            case '4':
                msg = await message.channel.send({ embeds: [embed4], components: [rowMenu] });
                break;

            case '5':
                msg = await message.channel.send({ embeds: [embed5], components: [rowMenu] });
                break;

            case '6':
                msg = await message.channel.send({ embeds: [embed6], components: [rowMenu] });
                break;

            case '7':
                msg = await message.channel.send({ embeds: [embed7], components: [rowMenu] });
                break;

            default:
                msg = await message.channel.send({ embeds: [embed], components: [rowMenu] });
        }

        const filter = (interaction) => interaction.user.id === message.author.id;
        const collector = msg.createMessageComponentCollector({ filter, idle: 30000 });

        collector.on('collect', (i) => {
            switch (i.values[0]) {
                case '1':
                    i.update({ embeds: [embed1] });
                    break;

                case '2':
                    i.update({ embeds: [embed2] });
                    break;

                case '3':
                    i.update({ embeds: [embed3] });
                    break;

                case '4':
                    i.update({ embeds: [embed4] });
                    break;

                case '5':
                    i.update({ embeds: [embed5] });
                    break;

                case '6':
                    i.update({ embeds: [embed6] });
                    break;

                case '7':
                    i.update({ embeds: [embed7] });
                    break;
            }
        });
        collector.on('end', (collected) => {
            msg.edit({ components: [] });
        });
    },
};
