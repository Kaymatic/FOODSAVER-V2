// Import required modules

const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const express = require('express');
const connectDB = require('./config/db'); 

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Multer for file uploads
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Serve index.html as the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle "Donate Food" form submissions
app.post('/donate', upload.single('photo'), (req, res) => {
    const { name, email } = req.body;
    
    // Sending a confirmation email (optional)
    sendEmail(email, 'Thank you for your donation!', 'We have received your donation successfully.');

    res.json({ success: true, message: 'Donation submitted successfully!' });
});

// Handle "Volunteer" form submissions
app.post('/volunteer', upload.single('photo'), (req, res) => {
    const { name, email } = req.body;

    // Sending a confirmation email (optional)
    sendEmail(email, 'Thank you for volunteering!', 'We appreciate your willingness to help reduce food waste.');

    res.json({ success: true, message: 'Volunteer signup successful!' });
});

// Function to send confirmation emails using Nodemailer
function sendEmail(to, subject, text) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // replace with your email
            pass: 'your-password'         // replace with your password
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}
const mongoose = require('mongoose');
const donateRoute = require('./routes/donate');
const volunteerRoute = require('./routes/volunteer');
const newsfeedRoute = require('./routes/newsfeed');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/donate', donateRoute);
app.use('/volunteer', volunteerRoute);
app.use('/newsfeed', newsfeedRoute);

// Serve static files
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:5000');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
