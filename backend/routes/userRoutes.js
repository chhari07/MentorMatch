// backend/routes/userRoutes.js
const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/profile', createUser);  // POST route for creating a user
router.get('/users', getUsers);       // GET route for fetching users

module.exports = router;
