const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');

// security 
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
// const expressMongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');

//  security middleware
app.use(cors())
app.use(helmet())
// app.use(expressMongoSanitize())
app.use(hpp());

app.use(bodyParser.json())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
});

app.use(limiter)

// mongodb Database Connection

// mongodb Database Connection
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const URI = process.env.MONGOURI;
let OPTION = { user: '', pass: '' };

mongoose.connect(URI, OPTION)
  .then(() => {
    console.log("✅ MongoDB connection success");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });



// baseurl/api/v1/endPoint
app.use("/api/v1", router)
// undefined routes
app.use((req, res) => {
  res.status(404).json({ status: "Failed", data: "Not Found" });
});

module.exports = app;