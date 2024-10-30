// routes/newsFeedRoutes.js
const express = require('express');
const NewsFeed = require('../models/NewsFeed');
const { sendConfirmationEmail } = require('../utils/emailService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newsFeed = new NewsFeed(req.body);
    await newsFeed.save();

    // Send confirmation email
    await sendConfirmationEmail(req.body.email, 'NewsFeed Subscription Confirmation', 'Thank you for subscribing to our news feed!');

    res.status(201).json({ message: 'Subscription successful' });
  } catch (error) {
    res.status(400).json({ error: 'Error processing subscription' });
  }
});

module.exports = router;
