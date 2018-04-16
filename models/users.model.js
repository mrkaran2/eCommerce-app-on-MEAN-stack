var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: String},
    currentCartItems: [{ type: Schema.Types.ObjectId, required: false, ref: 'Item' }],
    purchasedCartItems: [{ type: Schema.Types.ObjectId, required: false, ref: 'Item'  }]  
});

module.exports = mongoose.model('User', userSchema);
