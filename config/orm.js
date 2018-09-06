/*var connection = require("./connection.js");

var orm = {
    selectAll: function() {
        var query = "SELECT * FROM burgers;";
        connection.query(query, function(err, res) {
            if (err) throw err;
            res.json({ 
                burger: res.body.name,
                devoured: res.body.devoured
            });
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

module.exports = orm;*/