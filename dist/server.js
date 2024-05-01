const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DB_PORT,
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
            console.error(err);
            return res.status(500).send('Error inserting data');
        }
        res.status(200).send('Data inserted successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});