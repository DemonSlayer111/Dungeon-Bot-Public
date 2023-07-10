const mongoose = require('mongoose');

const guildbanSchema = new mongoose.Schema({
    GuildID: String,
    reason: String
})

module.exports = new mongoose.model('guildbans', guildbanSchema);