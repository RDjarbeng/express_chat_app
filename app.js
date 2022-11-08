var express = require("express");
var path = require("path");
var socket = require("socket.io");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
const PORT = 3000 || process.env.PORT;
var listener = app.listen(PORT, function () {
  console.log("Listening on port " + listener.address().port);
});
