// allow use of environmental variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongoDB
mongoose.connect(
  process.env.MONGO,
  { useNewUrlParser: true }
);

// check if connection was successful
const db = mongoose.connection;
// checks if connection with the database is successful
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const PORT = process.env.PORT || 9000;
const classRoutes = require('./routes/classRoutes');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize routes
app.use('/', classRoutes);

// listening for requests
app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`)
});