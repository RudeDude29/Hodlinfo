const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name:String,
    last:String,
    buy:String,
    sell:String,
    volume:String,
    base_unit:String
});

const dataModel = mongoose.model("Coin-dataz",dataSchema);

module.exports = dataModel;