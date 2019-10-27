const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    zipCode: Number
})

mongoose.model('User', userSchema);