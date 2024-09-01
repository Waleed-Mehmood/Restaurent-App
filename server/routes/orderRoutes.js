// routes/orderRoutes.js
const express = require('express');
const Order = require('./../models/Order');
const router = express.Router();

router.post('/placeOrder', async (req, res) => {
  try {
    const { cart, grandTotal  } = req.body;

    // Create a new order
    const newOrder = new Order({
      items: cart.map(item => ({
        image: item.image,
        title: item.title,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
        totalPrice: item.price * item.quantity,
      })),
      grandTotal: parseFloat(grandTotal),
    });

    // Save order to database
    await newOrder.save();

    res.status(200).json({ message: 'Order placed successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to place order.', error });
  }
});

module.exports = router;
