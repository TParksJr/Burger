var express = require("express");
var parser = require("body-parser")
var exphbs = require("express-handlebars");
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

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app);

app.listen(PORT, function () {
    console.log("Server listening on: localhost:" + PORT);
});