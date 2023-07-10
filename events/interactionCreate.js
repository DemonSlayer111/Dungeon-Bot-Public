const guildBan = require('../schemas/guildBan');
const userBan = require('../schemas/userBan');
const fetch = require('node-fetch');
const querystring = require('querystring');
module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (interaction.isCommand()) {
            if (interaction.channel === null) return;
            const bannedGuild = await guildBan.findOne({
                GuildID: interaction.guild.ids,
            });
            if (bannedGuild) return;
            const bannedUser = await userBan.findOne({
                userID: interaction.user.id,
            });
            if (bannedUser) return;
            const command = interaction.client.slashCommands.get(interaction.commandName);
            if (!command) return;
            try {
                command.execute(interaction);
            } catch (error) {
                console.error(error);
            }
        }
        if (interaction.isAutocomplete()) {
            if (interaction.channel === null) return;
            const bannedGuild = await guildBan.findOne({
                GuildID: interaction.guild.ids,
            });

            if (bannedGuild) return;
            const bannedUser = await userBan.findOne({
                userID: interaction.user.id,
            });

            if (bannedUser) return;

            if (!interaction.options._hoistedOptions[0]?.value) return;

            const query = querystring.stringify({ search: interaction.options._hoistedOptions[0]?.value });

            const list = await fetch(
                `https://ark.fandom.com/api.php?action=opensearch&${query}&limit10&namespace=0&format=json`
            ).then((response) => response.json());

            const responses = list[1];

            if (!responses.length) return;

            let responseArr = [];
            responses.forEach((res) => {
                responseArr.push({ name: `${res}`, value: `${res}` });
            });

            interaction.respond(responseArr);
        }
    },
};
