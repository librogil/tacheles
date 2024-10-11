const mongoose = require('mongoose');

const TermSchema = new mongoose.Schema({
    title: String,
    definition: String
})

const Term = mongoose.model('Term', TermSchema);

module.exports = { Term }