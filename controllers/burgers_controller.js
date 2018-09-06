//var burger = require("../models/burger.js");
//var express = require("express");
//var orm = require("../config/orm.js");
//var mysql = require("mysql");
/*var connection = require("../config/connection.js");

module.exports = function (app) {

    app.get("/", function (req, res) {
        var query = "SELECT * FROM burgers_db.burgers;";
        connection.query(query, function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                if (res[i].devoured == false) {
                    data.burgers.push(res[i]);
                } else if (res[i].devoured == true) {
                    data.eatenBurgers.push(res[i]);
                } else {
                    console.log("An error has occured.");
                };
            };
            console.log(data.eatenBurgers);
            console.log(data.burgers);
        });
        res.render("index", data);
    });

    app.post("/new", function (req, res) {
        //orm.insertOne();
    });

    app.put("/update", function (req, res) {
        //orm.updateOne();
    });
};*/