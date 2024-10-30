// routes/donateRoutes.js
const express = require('express');
const Donation = require('../models/Donate');
const { sendConfirmationEmail } = require('../utils/emailService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();

    // Send confirmation email
    await sendConfirmationEmail(req.body.email, 'Donation Confirmation', 'Thank you for your donation!');

    res.status(201).json({ message: 'Donation successful' });
  } catch (error) {
    res.status(400).json({ error: 'Error processing donation' });
  }
});

module.exports = router;
