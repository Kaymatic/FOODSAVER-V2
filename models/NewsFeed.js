// models/NewsFeed.js
const mongoose = require('mongoose');

const NewsFeedSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NewsFeed', NewsFeedSchema);
