var connection = require("../config/connection.js");
var burger = require("../models/burger");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.redirect("/burgers");
    });

    app.get("/burgers", function (req, res) {
        burger.selectAll(function (data) {
            var hbsObject = { burgers: data };
            res.render("index", hbsObject);
        });
    });

    app.post("/burgers/add", function (req, res) {
        burger.insertOne(req.body.name, function (result) {
            res.redirect("/");
        });
    });

    app.put("/burgers/update/:id", function (req, res) {
        burger.updateOne(req.params.id, function (result) {
            res.json("/");
        });
    });
};