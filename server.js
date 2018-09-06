var express = require("express");
var parser = require("body-parser")
var hbars = require("express-handlebars");
var mysql = require("mysql");
var path = require("path");


var PORT = process.env.PORT || 8080;

var data = {
    burgers: [], 
    eatenBurgers: []
};

app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(express.static(path.join(__dirname + '/public')));

app.engine("handlebars", hbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require("./controllers/burgers_controller.js")(app);
//require("./config/connection.js")(app);

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
    });
    res.render("index", data);
});

app.post("/new", function (req, res) {
    console.log(req);
    console.log(req.body);
    console.log(req.params);

    var query = "INSERT INTO burgers_db.burgers (name, devoured) VALUES (?, false);";
    connection.query(query, {name: req.params}, function (err, res) {
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

app.put("/update", function (req, res) {
    console.log(req);
    console.log(req.body);
    console.log(req.params);

    var query = "UPDATE burgers_db.burgers WHERE name = ?;";
    connection.query(query, {name: req.params}, function (err, res) {
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

app.listen(PORT, function () {
    console.log("Server listening on: localhost:" + PORT);
});