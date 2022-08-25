const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
 
    productId:String,
    name:String,
    description:String,
    tagSpecial:Boolean,
    rating:Number,
    tagging: [{ year: Number, tagId: Number }]
});

module.exports = mongoose.model('product', productSchema)