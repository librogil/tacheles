const mongoose = require('mongoose');

const ArgumentSchema = new mongoose.Schema({
    title: String,
    answers: [{short: String, full: String}],
    type: String,
})

const Argument = mongoose.model('argument', ArgumentSchema);

module.exports = { Argument }