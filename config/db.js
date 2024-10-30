// Import mongoose for MongoDB connection
const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// MongoDB URI from the .env file
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/foodsaver'; // Fallback to local MongoDB if URI is not provided

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    // Exit process with failure
    process.exit(1);
  }
};

// Export the connection function
module.exports = connectDB;
