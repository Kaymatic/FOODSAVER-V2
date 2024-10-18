const Food = require('../models/food');
const Request = require('../models/request'); // For food requests

// Get all food listings
exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching food listings' });
  }
};

// Add a new food listing
exports.addFood = async (req, res) => {
  const { name, description, quantity } = req.body;
  try {
    const newFood = new Food({ name, description, quantity });
    await newFood.save();
    res.json(newFood);
  } catch (error) {
    res.status(400).json({ message: 'Error adding food' });
  }
};

// Request a food item
exports.requestFood = async (req, res) => {
  const { foodId, userId } = req.body;
  try {
    const newRequest = new Request({ food: foodId, user: userId });
    await newRequest.save();
    res.json(newRequest);
  } catch (error) {
    res.status(400).json({ message: 'Error requesting food' });
  }
};
