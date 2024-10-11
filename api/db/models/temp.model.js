const mongoose = require('mongoose');

const TempSchema = new mongoose.Schema({
    argumentID: String,
    answerID: String,
    title: String,
    answer: {short: String, full: String},
    email: String
})

const Temp = mongoose.model('Temp', TempSchema);

module.exports = { Temp }