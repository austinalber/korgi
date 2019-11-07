const mongoose = require('mongoose');
const {Schema} = mongoose;

const friendSchema = new Schema({
    friendId: {
        type: String,
        required: true
    }
});

const userSchema = new Schema({
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
    password: {
        type: String,
        required: true,
        allowNull: false,
        // validate: {
        //     len: [1, 60]
        // }
    },
    userImage: {
        type: String,
        required: false
    },
    birthDay: {
        type: Number
    },
    birthMonth: {
        type: Number
    },
    birthYear: {
        type: Number
    },
    zipCode: Number,
    friendList: {
        // Array for all friends of this user
        // Default is undefined or no friends initially
        type: [friendSchema],
        default: undefined
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
