const Discord = require("discord.js");
module.exports = {
	name: 'eval',
	description: 'Evaluates javascript code.',
	async execute(message, args) {
    if(message.author.id !== "199530973023567872") return ;
    
    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
    try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        
        message.channel.send({content: `\`\`\`js\n${clean(evaled)}\`\`\``});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
      }
	},
};