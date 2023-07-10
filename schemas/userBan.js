const mongoose = require('mongoose');

const userbanSchema = new mongoose.Schema({
    userID: String,
    reason: String
})

module.exports = new mongoose.model('userbans', userbanSchema);