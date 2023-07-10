const guildban = require('../schemas/guildBan')
module.exports = {
	name: 'guildCreate',
	async execute(guild) {
        const bannedGuild1 = await guildban.findOne({
            GuildID: guild.id
        })
        if(bannedGuild1) guild.leave(bannedGuild1);
	}
};  