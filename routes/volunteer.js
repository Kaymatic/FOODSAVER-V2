// routes/volunteerRoutes.js
const express = require('express');
const Volunteer = require('../models/Volunteer');
const { sendConfirmationEmail } = require('../utils/emailService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();

    // Send confirmation email
    await sendConfirmationEmail(req.body.email, 'Volunteer Registration Confirmation', 'Thank you for signing up as a volunteer!');

    res.status(201).json({ message: 'Volunteer registration successful' });
  } catch (error) {
    res.status(400).json({ error: 'Error processing volunteer registration' });
  }
});

module.exports = router;
