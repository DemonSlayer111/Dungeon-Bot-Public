module.exports = {
	name: 'ready',
	execute(client) {
        console.log("Dungeon Bot is online!")
        client.user.setActivity('?help', { type: 'PLAYING' })
	}
};