const mysql = require('mysql');

// Fixing the extra spaces in the user, password, and database fields.
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'mentormatch',  // removed extra space
  password: 'Mentor@1907',  // removed extra space
  database: 'mentorshipdb'  // removed extra space
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the MySQL database');
});

module.exports = connection;
