const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: false
    },
    location: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
