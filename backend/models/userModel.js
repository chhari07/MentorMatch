// backend/models/userModel.js
const connection = require('../db');

const User = {
  create: (userData, callback) => {
    const query = 'INSERT INTO users (name, email, phone, gender, address, profile_picture) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [userData.name, userData.email, userData.phone, userData.gender, userData.address, userData.profilePicture], callback);
  },
  
  getAll: (callback) => {
    const query = 'SELECT * FROM users';
    connection.query(query, callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [id], callback);
  },
};

module.exports = User;
