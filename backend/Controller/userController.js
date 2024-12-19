const db = require('../config/db');

// Get all users
const getUsers = (req, res) => {
    db.query('SELECT * FROM profiles', (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching users' });
      }
      res.json(results);
    });
  };
  
  // Create a new user profile
  const createUser = (req, res) => {
    const { name, dob, gender, phone, email, address, profile_picture, mentor_gender, category, mentor_category } = req.body;
    const query = `INSERT INTO profiles (name, dob, gender, phone, email, address, profile_picture, mentor_gender, category, mentor_category) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    const values = [name, dob, gender, phone, email, address, profile_picture, mentor_gender, category, mentor_category];
  
    db.query(query, values, (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving user data' });
      }
      res.status(201).json({ message: 'User profile saved successfully' });
    });
  };
  
  module.exports = { getUsers, createUser };