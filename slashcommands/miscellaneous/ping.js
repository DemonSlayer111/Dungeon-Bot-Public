const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ping',
    description: 'Check bot latency',
    async execute(interaction) {
        let msg = await interaction.deferReply({fetchReply: true})
            const embed = new MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(`Pong!🏓 \nLatency is \`${msg.createdTimestamp - interaction.createdTimestamp}ms\` \nAPI Latency is \`${Math.round(interaction.client.ws.ping)}ms\``)
        interaction.editReply({embeds: [embed]})

    },
};