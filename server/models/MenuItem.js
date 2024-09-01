const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
});

const MenuItem = mongoose.model('MenuItem',MenuItemSchema,'MenuItem');
module.exports = MenuItem;
