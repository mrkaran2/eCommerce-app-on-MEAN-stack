var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String},
    category: { type: String},
    price: { type: Number},
    description: { type: String},
    imgSrc: { type: String}
});

module.exports = mongoose.model('Item', itemSchema);
module.exports.itemSchema = itemSchema; 