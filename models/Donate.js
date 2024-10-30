// models/Donate.js
const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Donate', DonationSchema);
