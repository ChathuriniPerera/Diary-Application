const mysql = require("mysql");
const dbconfig = require("./config/db.config");

//Database Connection Configuration
const dbConnection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DATABASE
});

//Database Connection 
dbConnection.connect((err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        dbConnection.query("CREATE DATABASE IF NOT EXISTS diary_db", (err, result) => {
            if (err) throw err;
            console.log("DB Created...");
        })
        if (dbConnection.state === "disconnected") {
            console.log("DB Not Connected...");
        }
        else {
            console.log("DB Connected...");
        }
    }
});

//Create Table
const diary_note = "CREATE TABLE IF NOT EXISTS diary_note (id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50), description VARCHAR(255), delete_status VARCHAR(7), date TIMESTAMP NOT NULL)";

//Create Table Connection
dbConnection.query(diary_note, (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("diary_note...");
    }
});



//Export DB Connection 
module.exports = dbConnection;