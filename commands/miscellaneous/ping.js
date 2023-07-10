	const { MessageEmbed } = require('discord.js')
	module.exports = {
		name: 'ping',
		description: 'Check bot latency',
		execute(message, args) {
			const newEmbed = new MessageEmbed()
			.setColor('#0e48b8')
			.setDescription('Loading data')
			message.channel.send({embeds: [newEmbed]}).then (async (msg) =>{
				const newEmbed1 = new MessageEmbed()
				.setColor('#0e48b8')
				.setDescription(`Pong!🏓 \nLatency is \`${msg.createdTimestamp - message.createdTimestamp}ms\` \nAPI Latency is \`${Math.round(message.client.ws.ping)}ms\``)

				msg.edit({ embeds: [newEmbed1]} )
		})

		},
	};