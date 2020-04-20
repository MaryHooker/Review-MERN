//create model

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance
let ItemSchema = new Schema(
    {
        itemName: String,
        itemDesc: String,
        itemPrice:Number

    }, {timestamps:true}
);

//export model
module.exports = mongoose.model('200420items', ItemSchema);