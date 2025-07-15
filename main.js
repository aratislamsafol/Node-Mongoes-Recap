const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
app.use(bodyParser.json());

// multipart/form-data (form-data) 
const upload = multer();
app.use(upload.none());
app.use(express.static("public"));

//  URL Query Post request
app.post("/", (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;

  res.send("Query Data: " + firstName + " " + lastName);
});

//  Custom Header request
app.post("/header", (req, res) => {
  const userName = req.header("username");
  const password = req.header("password");
  res.send("UserName: " + userName + " | Password: " + password);
});

//  JSON Data POST request
app.post("/json", (req, res) => {
  const jsonData = req.body.name;
  const jsonString = JSON.stringify(jsonData);
  res.send("JSON name: " + jsonString);
});

//  Form-Data POST request
app.post("/form-data", (req, res) => {
  const formData = req.body;
  res.send("Form Data Received: " + JSON.stringify(formData));
});

// ✅ Server run
app.listen(5000, function () {
  console.log("✅ Server running at http://localhost:5000");
});
