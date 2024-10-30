# FoodSaver

FoodSaver is a web application aimed at reducing food waste by connecting individuals and organizations with surplus food to those in need. The platform provides an organized and efficient way to manage food donations, volunteer opportunities, and the availability of resources to support communities. FoodSaver integrates user-friendly, visually appealing features, ensuring an engaging experience for users while contributing to a sustainable cause.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

FoodSaver is an innovative web-based platform built to tackle food waste and facilitate resource sharing. Users can donate, volunteer, and access available food resources seamlessly. By bringing individuals and organizations together, FoodSaver helps reduce food insecurity while promoting sustainability.

- **Deployed Site:** [FoodSaver](https://yourgithubusername.github.io/FoodSaver/)
- **Final Project Blog Article:** [Final Project Blog](https://www.linkedin.com/pulse/project-introduction-foodsaver-alice-adu-gyamfi/)
- **Author LinkedIn:** [Emmanuel Darkoh](https://www.linkedin.com/in/alice-adu-gyamfi-353000213/)

## Features

1. **Landing Page** with Hero Section:
   - Dynamic transitions of food images with a welcome message.
   - Translucent and sticky top bar with FoodSaver logo and quick navigation options.

2. **Donation and Volunteer Forms**:
   - Easy-to-use forms for food donations or volunteer sign-ups.
   - Image upload options, email confirmations, and instructions provided.

3. **Food Categories Section**:
   - Medium-sized images of food groups with hover effects.
   - Selectable categories with scroll effects for a detailed view of food group availability.

4. **Confirmation and Success Messages**:
   - User-friendly feedback for successful sign-ups, donations, and other requests.

5. **Interactive and Responsive Design**:
   - Designed for all screen sizes and enhanced with animations and smooth transitions.
   - Supports user interactivity with buttons, icons, and scroll effects.

6. **Email Notifications**:
   - Automatic emails to donors and volunteers after successful form submissions with further instructions.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas or local installation)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (or a local MongoDB instance)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/FoodSaver.git
   cd FoodSaver
   ```

2. **Backend Setup**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add your MongoDB connection string and port:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```

3. **Start the Backend Server**:
   ```bash
   npm start
   ```

4. **Frontend Deployment on GitHub Pages**:
   - Go to your GitHub repository and enable GitHub Pages in the settings.

## Usage

- **Access the Homepage**: Explore the hero section and navigate using the top bar.
- **Donate or Volunteer**: Use the provided forms to contribute to the cause.
- **Food Groups**: Select categories to see detailed availability and descriptions.

## Contributing

We welcome contributions to the FoodSaver project! Please follow these steps:

1. **Fork the Repository**
2. **Create a Branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your Changes**:
   ```bash
   git commit -m "Add feature or fix"
   ```
4. **Push to the Branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.