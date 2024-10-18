const express = require('express');
const router = express.Router();
const { signUpUser, signInUser, forgotPassword } = require('../controllers/authController');

// Sign up route
router.post('/signup', signUpUser);

// Sign in route
router.post('/signin', signInUser);

// Forgot password route
router.post('/forgot-password', forgotPassword);

module.exports = router;
