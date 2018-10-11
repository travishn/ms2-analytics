const express = require('express');
const router = express.Router();

// Grab all the classes from the DB
router.get('/class', (req, res) => {
  res.send({ type: 'GET' });
});

router.get('/class/:id', (req, res) => {
  res.send({ type: 'GET' });
});

// Add a new class to the DB
router.post('/class', (req, res) => {
  res.send({ type: 'POST' });
});

// Update a class in the DB
router.put('/class/:id', (req, res) => {
  res.send({ type: 'PUT' });
});

// Delete a class from the DB
router.delete('/class/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;