const Discord = require("discord.js")
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_WEBHOOKS]})
const fs = require("fs")

const mongoose = require('mongoose')

const config = require("./config.json")


mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.components = new Discord.Collection();



const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

const slashCommandFolders = fs.readdirSync('./slashcommands');

for (const folder of slashCommandFolders) {
	const slashCommandFiles = fs.readdirSync(`./slashcommands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of slashCommandFiles) {
		const slashCommand = require(`./slashcommands/${folder}/${file}`);
		client.slashCommands.set(slashCommand.name, slashCommand);
	}
}

const componentFolders = fs.readdirSync('./components');

for (const folder of componentFolders) {
	const componentFiles = fs.readdirSync(`./components/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of componentFiles) {
		const component = require(`./components/${folder}/${file}`);
		client.components.set(component.name, component);
	}
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);

	if(error.name === "DiscordAPIError") {
		const errorEmbed = new Discord.MessageEmbed()
		.setTitle("ERROR")
		.setColor('#303135')
		.addFields([
			{
				name: `**Time:**`,
				value: `<t:${parseInt(Date.now()/1000)}:F>`
			},
			{
				name: `**Method:**`,
				value: `${error.method}`
			},
			{
				name: `**Path:**`,
				value: `${error.path}`
			},
			{
				name: `**Code:**`,
				value: `${error.code}`
			},
			{
				name: `**HTTP Status:**`,
				value: `${error.httpStatus}`
			}
		])

		const webhook = new Discord.WebhookClient({ id: `895361108683141160`, token: `CObU6gjjXWGh7mWs32mp26pg2635ZRreg4pcifVfK9dUnHyTZMvC-mU9-8RXGOMfg9Ew`})
		webhook.send({embeds: [errorEmbed]})
	}
});



client.login(config.TOKEN);