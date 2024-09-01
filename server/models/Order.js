const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      image: String,
      title: String,
      description: String,
      price: Number,
      quantity: Number,
      totalPrice: Number,
    }
  ],
  grandTotal: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema,'Order');
module.exports = Order;