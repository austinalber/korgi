const mongoose = require('mongoose');
const {Schema} = mongoose;

const friendSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
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
    password: {
        type: String,
        required: true,
        allowNull: false,
        // validate: {
        //     len: [1, 60]
        // }
    },
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
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
