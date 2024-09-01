const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new menu item
router.post('/', async (req, res) => {
  const { name, description, price, image } = req.body;
  const newItem = new MenuItem({
    name,
    description,
    price,
    image,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
