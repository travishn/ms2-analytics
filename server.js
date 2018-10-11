// allow use of environmental variables
require('dotenv').config();

// set up express app
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 9000;
const classRoutes = require('./routes/classRoutes');

// initialize routes
app.use('/', classRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// listening for requests
app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`)
});