// models/Volunteer.js
const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  availability: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
