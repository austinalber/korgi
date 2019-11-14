const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
    },
    postImage: {
        type: String,
        required: false
    },
    caption: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    likedBefore: {
        type: Boolean,
        default: false
    },
    location: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
