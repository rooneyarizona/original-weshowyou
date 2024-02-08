const pg = require('pg');

const db = new Client({
    user: "postgres",
    host: "localhost",
    database: "users",
    password: "21Chandler!!!",
    port: 5432
});

db.connect();

const query = "SELECT * FROM member_info";
const query2 = "INSERT INTO member_info (first_name, last_name, date_joined, phone_number) VALUES ('Richa', 'Sagar', NOW(), '4802078136')";

const userOption = prompt("What would you like to do?");

if (userOption == "1") {
    db.query(query, (err, res) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            console.log("Executing query:", query);
            console.log(res.rows);
        }
        db.end(); // Close the database connection after executing the query
    });
} else if (userOption == "2") {
    db.query(query2, (err, res) => {
        if (err) {
            console.error("Error adding record:", err);
        } else {
            console.log("Record Added!");
        }
        db.end(); // Close the database connection after executing the query
    });
} else {
    console.log("Invalid option selected.");
    db.end(); // Close the database connection for any other userOption
}
