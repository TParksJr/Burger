var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function() {
        var query = "INSERT INTO burgers (name, devoured) VALUES (?, ?);";
        connection.query(query, function(err, res) {
            if (err) throw err;
        });
    },
    updateOne: function() {
        var query = "UPDATE burgers SET name = ?, devoured = ?;";
        connection.query(query, function(err, res) {
            if (err) throw err;
        });
    }
};

module.exports = orm;
