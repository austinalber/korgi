const mongoose = require('mongoose');
const {Schema} = mongoose;

const friendCardSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        allowNull: false,
        // validate: {
        //     len: [1, 40]
        // }
    },
    image: {
        type: String,
        required: false
    },
    zipCode: Number
    // ,
    // friendList: {
    //     // Array for all friends of this user
    //     // Default is undefined or no friends initially
    //     type: [friendSchema],
    //     default: undefined
    // }
});

const FriendCard = mongoose.model('FriendCard', friendCardSchema);

module.exports = FriendCard;
