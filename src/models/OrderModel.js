const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    userId : String,
    items: Array,
    status: String,
})

const OrderDataModel = mongoose.model('orders', DataSchema);
module.exports = OrderDataModel;
