const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootr00t!",
    database: "employees_db"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        throw err;
    }
});

module.exports = connection;