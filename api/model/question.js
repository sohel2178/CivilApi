const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    question: { type: String, required: true },
    category: { type: String, required: true },
    options: [{ type: String}],
    answer: { type: Number, required: true }
});

module.exports = mongoose.model('Question', questionSchema);