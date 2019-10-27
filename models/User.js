const mongoose = require('mongoose');
const {Schema} = mongoose;

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
        validate: {
            len: [1, 60]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        allowNull: false,
        validate: {
            len: [1, 40]
        }
    },
    zipCode: Number
})

mongoose.model('User', userSchema);