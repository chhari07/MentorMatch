// Import necessary modules
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json()); // Express.json() is used to parse incoming JSON requests


// API to get all users
app.get('/UserProfile', (req, res) => {
  db.query('SELECT * FROM profiles', (err, results) => {
    if (err) {
      console.error('Error fetching users data:', err);
      return res.status(500).json({ error: 'Error fetching users data', details: err.message });
    }
    res.json(results);
  });
});

// API to save user profile data
app.post('/Profile', (req, res) => {
  const { name, dob, gender, phone, email, address, profilePicture, mentorGender, category, mentorCategory } = req.body;

  // Validate the required fields
  if (!name || !dob || !gender || !phone || !email || !address || !profilePicture || !mentorGender || !category || !mentorCategory) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Validate email format using a regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  // Validate phone number format (assuming it should be a 10-digit number)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number format. It should be 10 digits.' });
  }

  // Use parameterized queries to prevent SQL injection
  const query = `INSERT INTO profiles (name, dob, gender, phone, email, address, profile_picture, mentor_gender, category, mentor_category) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [name, dob, gender, phone, email, address, profilePicture, mentorGender, category, mentorCategory];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error saving user data:', err);
      return res.status(500).json({ error: 'Error saving user data', details: err.message });
    }
    res.status(201).json({ message: 'User profile saved successfully' });
  });
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
