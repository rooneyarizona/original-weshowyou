const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const config = require('./config');
require('dotenv').config();

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
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

$(document).ready(function(){
    $('#myForm').submit(function(e){
        e.preventDefault();
        const formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'http://www.weshowyou.tv/submit-form',
            data: formData,
            success: function(response) {
                alert(response);
                window.location.href= "success.html";
            },
            error: function(err) {
                alert("An error has occured!");
                console.error(err);
            }
        });
    });
});