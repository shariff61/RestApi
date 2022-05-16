const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./router/user.router");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(userRouter);
//home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//file not found
app.use((req, res, next) => {
  res.status(404).json({ message: "file not found!!" });
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "server is not found" });
});
module.exports = app;
