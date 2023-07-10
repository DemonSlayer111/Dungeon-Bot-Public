const Discord = require('discord.js');
module.exports = {
    name: 'deploy',
    description: 'Deploy slash commands.',
    async execute(message, args) {
        if (message.author.id !== '199530973023567872') return;

        try {
            message.client.application.commands.set([
                {
                    name: 'consumable',
                    description: 'View consumable recipes and information',
                    options: [
                        {
                            type: 'STRING',
                            name: 'consumable',
                            description: 'Select a consumable',
                            required: false,
                            choices: [
                                {
                                    name: 'Focal Chili',
                                    value: 'focal',
                                },
                                {
                                    name: 'Lazarus Chowder',
                                    value: 'lazarus',
                                },
                                {
                                    name: 'Enduro Stew',
                                    value: 'enduro',
                                },
                                {
                                    name: 'Calien Soup',
                                    value: 'calien',
                                },
                                {
                                    name: 'Fria Curry',
                                    value: 'fria',
                                },
                                {
                                    name: 'Medical Brew',
                                    value: 'medical',
                                },
                                {
                                    name: 'Energy Brew',
                                    value: 'energy',
                                },
                                {
                                    name: 'Battle Tartare',
                                    value: 'tartare',
                                },
                                {
                                    name: 'Mindwipe Tonic',
                                    value: 'mindwipe',
                                },
                                {
                                    name: 'Hemostatic Serum',
                                    value: 'hemostatic',
                                },
                                {
                                    name: 'Lesser Antidote',
                                    value: 'antidote',
                                },
                                {
                                    name: 'Stimulant',
                                    value: 'stimulant',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'equipment',
                    description: 'Information about weapons and armor',
                    options: [
                        {
                            type: 'STRING',
                            name: 'equipment',
                            description: 'Select equipment',
                            required: false,
                            choices: [
                                {
                                    name: 'Pump-Action Shotgun',
                                    value: 'pump',
                                },
                                {
                                    name: 'Shotgun',
                                    value: 'shotgun',
                                },
                                {
                                    name: 'Compound Bow',
                                    value: 'compound',
                                },
                                {
                                    name: 'Pike',
                                    value: 'pike',
                                },
                                {
                                    name: 'Sword',
                                    value: 'sword',
                                },
                                {
                                    name: 'Iron Skillet',
                                    value: 'skillet',
                                },
                                {
                                    name: 'Aerial Symbiote',
                                    value: 'symbiote',
                                },
                                {
                                    name: 'Frog Feet',
                                    value: 'frog',
                                },
                                {
                                    name: 'Assault Rifle',
                                    value: 'assault',
                                },
                                {
                                    name: 'Riot Shield',
                                    value: 'shield',
                                },
                                {
                                    name: 'Flak Armor',
                                    value: 'flak',
                                },
                                {
                                    name: 'Riot Armor',
                                    value: 'riot',
                                },
                                {
                                    name: 'Ghillie Armor',
                                    value: 'ghillie',
                                },
                                {
                                    name: 'Fur Armor',
                                    value: 'fur',
                                },
                                {
                                    name: 'TEK Rifle',
                                    value: 'tekrifle',
                                },
                                {
                                    name: 'TEK Shield',
                                    value: 'tekshield',
                                },
                                {
                                    name: 'TEK Armor',
                                    value: 'tekarmor',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'artifact',
                    description: 'Information about artifacts',
                    options: [
                        {
                            type: 'STRING',
                            name: 'artifact',
                            description: 'Select an artifact',
                            required: false,
                            choices: [
                                {
                                    name: 'Artifact of the Hunter',
                                    value: 'hunter',
                                },
                                {
                                    name: 'Artifact of the Clever',
                                    value: 'clever',
                                },
                                {
                                    name: 'Artifact of the Massive',
                                    value: 'massive',
                                },
                                {
                                    name: 'Artifact of the Skylord',
                                    value: 'skylord',
                                },
                                {
                                    name: 'Artifact of the Strong',
                                    value: 'strong',
                                },
                                {
                                    name: 'Artifact of the Immune',
                                    value: 'immune',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'cave',
                    description: 'Information about caves',
                    options: [
                        {
                            type: 'STRING',
                            name: 'cave',
                            description: 'Select a cave',
                            required: false,
                            choices: [
                                {
                                    name: 'South Cave',
                                    value: 'south',
                                },
                                {
                                    name: 'Central Cave',
                                    value: 'central',
                                },
                                {
                                    name: 'Lava Cave',
                                    value: 'lava',
                                },
                                {
                                    name: 'Northwest Cave',
                                    value: 'northwest',
                                },
                                {
                                    name: 'Yeti Cave',
                                    value: 'yeti',
                                },
                                {
                                    name: 'Swamp Cave',
                                    value: 'swamp',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'dungeon',
                    description: 'View dungeon and theme information',
                    options: [
                        {
                            type: 'STRING',
                            name: 'theme',
                            description: 'Select a dungeon theme',
                            required: false,
                            choices: [
                                {
                                    name: 'Ruins Theme',
                                    value: 'ruins',
                                },
                                {
                                    name: 'Ice Theme',
                                    value: 'ice',
                                },
                                {
                                    name: 'Swamp Theme',
                                    value: 'swamp',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'map',
                    description: 'View the current dungeon map',
                    options: [
                        {
                            type: 'STRING',
                            name: 'map',
                            description: 'Select a map',
                            choices: [
                                {
                                    name: 'The Mysterious Moss-Pit',
                                    value: '1',
                                },
                                {
                                    name: 'RMX: Cemetary of Chaos',
                                    value: '2',
                                },
                                {
                                    name: 'Labyrinth of the Frozen Army',
                                    value: '3',
                                },
                                {
                                    name: 'Netcaster of the Gloom',
                                    value: '4',
                                },
                                {
                                    name: 'RMX: Decaying Halls of Despair',
                                    value: '5',
                                },
                                {
                                    name: 'The Wondering Vault',
                                    value: '6',
                                },
                                {
                                    name: 'RMX: The Quickening',
                                    value: '7',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'help',
                    description: 'Get help with bot commands',
                    options: [
                        {
                            type: 'STRING',
                            name: 'command',
                            description: 'Select a command',
                            required: false,
                            choices: [
                                {
                                    name: 'Prefix',
                                    value: 'prefix',
                                },
                                {
                                    name: 'Dungeon',
                                    value: 'dungeon',
                                },
                                {
                                    name: 'Consumable',
                                    value: 'consumable',
                                },
                                {
                                    name: 'Boss',
                                    value: 'boss',
                                },
                                {
                                    name: 'Traps',
                                    value: 'traps',
                                },
                                {
                                    name: 'Wall',
                                    value: 'wall',
                                },
                                {
                                    name: 'Jump',
                                    value: 'jump',
                                },
                                {
                                    name: 'Axe',
                                    value: 'axe',
                                },
                                {
                                    name: 'Threat Room',
                                    value: 'threatroom',
                                },
                                {
                                    name: 'Equipment',
                                    value: 'equipment',
                                },
                                {
                                    name: 'Cave',
                                    value: 'cave',
                                },
                                {
                                    name: 'Artifact',
                                    value: 'artifact',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'invite',
                    description: 'Get invite, support, and vote links for the bot',
                },
                {
                    name: 'ping',
                    description: 'Check bot latency',
                },
                {
                    name: 'wiki',
                    description: 'Search the ARK wiki',
                    options: [
                        {
                            type: 'STRING',
                            name: 'search',
                            description: 'Search term',
                            required: true,
                            autocomplete: true,
                        },
                    ],
                },
                {
                    name: 'boss',
                    description: 'Information about ARK Mobile bosses.',
                    options: [
                        {
                            type: 'STRING',
                            name: 'boss',
                            description: 'Select a boss',
                            required: false,
                            choices: [
                                {
                                    name: 'Megapithecus Pestis',
                                    value: 'megapithecus',
                                },
                                {
                                    name: 'Broodgenetrix',
                                    value: 'broodgenetrix',
                                },
                                {
                                    name: 'Beelzemorbus',
                                    value: 'beelzemorbus',
                                },
                                {
                                    name: 'Cubozoa Multis',
                                    value: 'cubozoa',
                                },
                                {
                                    name: 'Obsidioequus',
                                    value: 'obsidioequus',
                                },
                                {
                                    name: 'Dodobitus',
                                    value: 'dodobitus',
                                },
                                {
                                    name: 'Doedicurus Vastus',
                                    value: 'doedicurus',
                                },
                                {
                                    name: 'Gula Beetle',
                                    value: 'gula',
                                },
                                {
                                    name: 'Argentustus',
                                    value: 'argentustus',
                                },
                                {
                                    name: 'Noctis',
                                    value: 'noctis',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'threatroom',
                    description: 'Information about dungeon threat rooms',
                    options: [
                        {
                            type: 'STRING',
                            name: 'effect',
                            description: 'Select a threatroom',
                            required: false,
                            choices: [
                                {
                                    name: 'Armor Ineffective',
                                    value: 'armorless',
                                },
                                {
                                    name: 'Armor Effectiveness Reduced',
                                    value: 'reduced',
                                },
                                {
                                    name: 'Growing',
                                    value: 'growing',
                                },
                                {
                                    name: 'Juggernaut',
                                    value: 'juggernaut',
                                },
                                {
                                    name: 'Slowed',
                                    value: 'slowed',
                                },
                                {
                                    name: 'Turbo',
                                    value: 'turbo',
                                },
                                {
                                    name: 'Decreasing Temperature',
                                    value: 'cold',
                                },
                                {
                                    name: 'Increasing Temperature',
                                    value: 'hot',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'axe',
                    description: 'Information about axe traps',
                    options: [
                        {
                            type: 'STRING',
                            name: 'type',
                            description: 'Type of axe trap',
                            required: false,
                            choices: [
                                {
                                    name: 'Ruins Axe',
                                    value: 'ruins',
                                },
                                {
                                    name: 'Ice Axe',
                                    value: 'ice',
                                },
                                {
                                    name: 'Swamp Axe',
                                    value: 'swamp',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'jump',
                    description: 'Information about jump traps',
                    options: [
                        {
                            type: 'STRING',
                            name: 'type',
                            description: 'Type of jump trap',
                            required: false,
                            choices: [
                                {
                                    name: 'Lava Jump',
                                    value: 'ruins',
                                },
                                {
                                    name: 'Ice Jump',
                                    value: 'ice',
                                },
                                {
                                    name: 'Swamp Jump',
                                    value: 'swamp',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'trap',
                    description: 'Information about dungeon traps',
                },
                {
                    name: 'wall',
                    description: 'Information about wall traps',
                    options: [
                        {
                            type: 'STRING',
                            name: 'type',
                            description: 'Type of wall trap',
                            required: false,
                            choices: [
                                {
                                    name: 'Ruins Wall',
                                    value: 'ruins',
                                },
                                {
                                    name: 'Ice Wall',
                                    value: 'ice',
                                },
                                {
                                    name: 'Swamp Wall',
                                    value: 'swamp',
                                },
                            ],
                        },
                    ],
                },
            ]);
            message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setColor('#0e48b8')
                        .setDescription(`Deployed slash commands successfully.`),
                ],
            });
        } catch (error) {
            message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setColor('#0e48b8')
                        .setDescription(`An error occured:\n\`\`\`${error}\`\`\``),
                ],
            });
        }
    },
};
