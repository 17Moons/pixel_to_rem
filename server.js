//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app= express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  var  val = Number(req.body.pixel);

  var r =0.06;
  var result = r*val;
  res.send("REM is "+ result);
});

app.listen(3000, function(){
  console.log("runnin");
});
