
const express = require("express");
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended: true}));


//SEND THE HTML PAGE WHEN THE BROWSER ASKS FOR IT
app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});
//FROM THE PAGE RETREIVE THE VALUES THAT THE USER INPUTS. PERFORM OPERATION AND THEN SEND THE RESULT AS RESPONSE
app.post("/", function(req,res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("the result of the calculation is " + result);
})

app.get("/bmicalculator", function(req,res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req,res) {
  var weight = parseFloat(req.body.weight); // IN DECIMAL
  var height = parseFloat(req.body.height);
  var result = weight/(height * height);
  res.send("Your BMI is " + result );
});

app.listen(1000, function () {
  console.log("Server is running on port 1000");
})
