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
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     len: [1, 40]
        // }
    },
    password: {
        type: String,
        required: true,
        // validate: {
        //     len: [1, 60]
        // }
    },
    userImage: {
        type: String,
        // required: false
        default: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
    },
    birthday: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
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
