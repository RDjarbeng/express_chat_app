var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
