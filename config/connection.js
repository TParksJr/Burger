/*module.exports = function (app) {

    var mysql = require("mysql");

    var connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "burgers_db"
    });

    connection.connect(function (err) {
        if (err) {
            console.error("Error connecting: " + err.stack);
        } else {
            console.log("Connected as id " + connection.threadId);
        };
    });
};*/