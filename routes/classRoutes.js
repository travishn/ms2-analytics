const express = require('express');
const router = express.Router();
const Class = require('../models/class');

// Grab all the classes from the DB
router.get('/class', (req, res) => {
  res.send({ type: 'GET' });
});

router.get('/class/:id', (req, res) => {
  res.send({ type: 'GET' });
});

// Add a new class to the DB
router.post('/class', async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res.send(newClass);
  } catch (err) {
    res.status(422).send({
      error: 'Unable to add class. Please try again.'
    });
  }
});

// Update a class in the DB
router.put('/class/:id', (req, res) => {
  res.send({ type: 'PUT' });
});

// Delete a class from the DB
router.delete('/class/:id', async (req, res) => {
  try {
    const deleted = await Class.findByIdAndRemove({ _id: req.params.id });
    res.send(deleted);
  } catch (err) {
    res.status(422).send({
      error: 'Target ID does not exist in the database'
    });
  }
});

module.exports = router;