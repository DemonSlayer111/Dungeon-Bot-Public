const fetch = require('node-fetch');
const querystring = require('querystring');
const Discord = require('discord.js')
module.exports = {
	name: 'wiki',
	description: 'Search ARK Wiki',
	async execute(message, args) {

    if(!args[0]) return message.reply({embeds: [new Discord.MessageEmbed().setColor('#0e48b8').setDescription("Please provide a search term.")], allowedMentions: { repliedUser: false }})


    const query = querystring.stringify({ search: args.join(' ') });

    const list = await fetch(`https://ark.fandom.com/api.php?action=opensearch&${query}&limit=1&namespace=0&format=json`)
    .then(response => response.json());

    
    const wikititle = querystring.stringify({titles: list[1]})

    const wikiText = await fetch(`https://ark.fandom.com/api.php?action=query&${wikititle}&prop=extracts&format=json&exintro=1&explaintext=1`).then(response => response.json());
    const wikiImage = await fetch(`https://ark.fandom.com/api.php?action=query&${wikititle}&prop=pageimages&format=json&pithumbsize=600`).then(response => response.json());


    if(!wikiText.query) return message.reply({embeds: [new Discord.MessageEmbed().setColor('#0e48b8').setDescription("Unable to find a matching article. Please provide a different search term.")], allowedMentions: { repliedUser: false }})
    const objText = wikiText.query.pages
    const objImage = wikiImage.query.pages

    const text = objText[Object.keys(objText)[0]]
    const image = objImage[Object.keys(objImage)[0]]
    const pageName = text.title.split(" ").join("_")
    let description = text.extract
    if(text.extract.length > 1024) {
        description = text.extract.substring(0, 1024) + '...'
    }


    const embed = new Discord.MessageEmbed()
    .setColor('#0e48b8')
    .setTitle(`${text.title}`)
    .setURL(`https://ark.fandom.com/wiki/${pageName}`)
    .setDescription(description)   
        
    if(image.thumbnail){
        embed.setImage(`${image.thumbnail.source}`)
    }

    message.channel.send({embeds: [embed]})
	},
};