const fs = require('fs');
const Discord = require('discord.js')

module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	execute(message, args) {
        if (message.author.id !== "199530973023567872") return;

		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		const slashCommand = message.client.slashCommands.get(commandName)
		if (!command && !slashCommand) {
            const embedNoCommand = new Discord.MessageEmbed()
            .setColor('#0e48b8')
            .setDescription(`Unable to find command with name or alias \`${commandName}\``)
			return message.channel.send({ embeds: [embedNoCommand]})
		}
		let embedStr = []
		if(command){
			const commandFolders = fs.readdirSync('./commands');
			const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${command.name}.js`));

			delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];
			try {
				const newCommand = require(`../${folderName}/${command.name}.js`);
				message.client.commands.set(newCommand.name, newCommand);
				embedStr.push(`Reloaded command: \`${newCommand.name}\``)

			} catch (error) {
				console.error(error);
				embedStr.push(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``)
			}
		}
		if(slashCommand){
			const slashCommandFolders = fs.readdirSync('./slashcommands');
			const slashFolderName = slashCommandFolders.find(folder => fs.readdirSync(`./slashcommands/${folder}`).includes(`${slashCommand.name}.js`));

			delete require.cache[require.resolve(`../../slashcommands/${slashFolderName}/${slashCommand.name}.js`)];
			try {
				const newSlashCommand = require(`../../slashcommands/${slashFolderName}/${slashCommand.name}.js`);
				message.client.slashCommands.set(newSlashCommand.name, newSlashCommand);
				embedStr.push(`Reloaded slash command: \`${newSlashCommand.name}\``)

			} catch (error) {
				console.error(error);
				embedStr.push(`There was an error while reloading a slash command \`${slashCommand.name}\`:\n\`${error.message}\``)
			}
		}
		const embed = new Discord.MessageEmbed()
		.setColor('#0e48b8')
		.setDescription(`${embedStr.join("\n\n")}`)
		message.channel.send({embeds: [embed]})


	},
};