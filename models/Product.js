// This is a test model.
// It will be used as a layout for future schema.
const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: String,
    description: String,
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
