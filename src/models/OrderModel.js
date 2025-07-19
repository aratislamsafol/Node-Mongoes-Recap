const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    userId : {type: String, required: [true, ' userId is required!']},
    items: Array,
    status: {type: String, default: 'Pending'},
    mobile: {
        type: String,
        validate: {
            validator: function (value) {
                if(value.length !== 11) {
                    return false;
                }else {
                    return true;
                }
            },
            message: "11 Digit mobile number required"
        }
    },
    phone: {
        type: String,
        validate: {
            validator: function (value) {
                return /^(?:\+88|88)?01[3-9]\d{8}$/.test(value)
            },
            message: "Please enter a valid Bangladeshi mobile number (e.g., 017xxxxxxxx or +88017xxxxxxxx)."
        }
    }
}, {versionKey: false})

const OrderDataModel = mongoose.model('orders', DataSchema);
module.exports = OrderDataModel;

