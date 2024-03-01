const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
  host: 'we-show-you.c7ui8yuyev9l.us-west-1.rds.amazonaws.com:3306',
  user: 'rooneyarizona',
  password: '21Chandler!!!',
  database: 'weshowyou'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  const { firstName, lastName, userName, password, dateOfBirth, dateJoined, eMailAddress } = req.body;
  const sql = 'INSERT INTO users (firstName, lastName, userName, password, dateOfBirth, dateJoined, eMailAddress) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [firstName, lastName, userName, password, dateOfBirth, dateJoined, eMailAddress];
  
  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send('Error inserting data');
      throw err;
    }
    res.status(200).send('Data inserted successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
