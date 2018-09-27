var connection = require("../config/connection.js");
var burger = require("../models/burger");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.redirect("/burgers");
    });

    app.get("/burgers", function (req, res) {
        burger.selectAll(function(data) {
            var hbsObject = { burgers: data };
            res.render("index", hbsObject);
        });
    });

    app.post("/new", function (req, res) {
        
    });

    app.put("/update", function (req, res) {
        
    });
};