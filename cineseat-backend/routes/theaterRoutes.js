const express = require('express');
const router = express.Router();
const { Theater } = require('../models');

// Get all theaters
router.get('/', async (req, res) => {
  try {
    const theaters = await Theater.findAll();
    res.json(theaters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a theater by ID
router.get('/:id', async (req, res) => {
  try {
    const theater = await Theater.findByPk(req.params.id);
    if (theater) {
      res.json(theater);
    } else {
      res.status(404).json({ error: 'Theater not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new theater
router.post('/', async (req, res) => {
  try {
    const newTheater = await Theater.create(req.body);
    res.status(201).json(newTheater);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a theater
router.put('/:id', async (req, res) => {
  try {
    const theater = await Theater.findByPk(req.params.id);
    if (theater) {
      await theater.update(req.body);
      res.json(theater);
    } else {
      res.status(404).json({ error: 'Theater not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a theater
router.delete('/:id', async (req, res) => {
  try {
    const theater = await Theater.findByPk(req.params.id);
    if (theater) {
      await theater.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Theater not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
