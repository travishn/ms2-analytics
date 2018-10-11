require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

app.get('/test', (req, res) => {
  res.send({
    express: "It's over 9000!!!"
  })
});

app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`)
});