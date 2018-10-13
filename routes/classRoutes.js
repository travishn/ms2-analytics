const express = require('express');
const router = express.Router();
const Class = require('../models/class');

// Grab all the classes from the DB
router.get('/class', async (req, res) => {
  try {
    const classes = await Class.find({});
    res.send(classes);
  } catch (err) {
    res.send(err);
  }
});

// Find a specific class by its object ID
router.get('/class/:id', async (req, res) => {
  try {
    const target = await Class.find({ _id: req.params.id });
    res.send(target);
  } catch (err) {
    res.send(err);
  }
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
router.put('/class/:id', async (req, res) => {
  try {
    const old = await Class.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const updated = await Class.findOne({ _id: req.params.id });
    res.send(updated);
  } catch (err) {
    res.status(422).send({
      error: 'Class ID does not exist. Please try again.'
    })
  }
});

// Add a class skill in the DB
router.put('/class/skill/:id', async (req, res) => {
  try {
    const old = await Class.findOneAndUpdate(
      { _id: req.params.id }, 
      { $push: { skills: req.body.skill } },
      { runValidators: true }
    );

    const updated = await Class.findOne({ _id: req.params.id });
    res.send(updated);
  } catch (err) {
    res.status(422).send({
      error: 'Invalid class skill. Please try again.'
    });
  }
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