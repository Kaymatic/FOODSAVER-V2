const express = require('express');
const router = express.Router();
const { getFoods, addFood, requestFood } = require('../controllers/foodController');

// Get all food listings
router.get('/', getFoods);

// Add a new food listing
router.post('/', addFood);

// Request a food
router.post('/request', requestFood);

module.exports = router;
