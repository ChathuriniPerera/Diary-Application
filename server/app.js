const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const sql = require("./db");

const app = express();
//Express app setup
app.use (bodyparser.json());
app.use (bodyparser.urlencoded({ extended: true}));

//cross setting
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Accept,Content-Type");

  if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT,PATCH,DELETE,GET,POST");
  }
  next();
});


app.get("/", (req, res) => {
  res.status(200).json({
      Status: "Your Project api-server running...!"
  });
  console.log("Entry Success...!");
});

//controllers path tika
const newnote = require("./controllers/newnote.controller");

//
app.post("/create-newnote", newnote.create);
app.post("/update-newnote", newnote.updateNewNote);

//
module.exports = app;
