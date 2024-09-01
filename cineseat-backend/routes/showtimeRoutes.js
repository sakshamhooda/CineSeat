const express = require('express');
const router = express.Router();
const { Showtime } = require('../models');

// Get all showtimes
router.get('/', async (req, res) => {
  try {
    const showtimes = await Showtime.findAll();
    res.json(showtimes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a showtime by ID
router.get('/:id', async (req, res) => {
  try {
    const showtime = await Showtime.findByPk(req.params.id);
    if (showtime) {
      res.json(showtime);
    } else {
      res.status(404).json({ error: 'Showtime not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new showtime
router.post('/', async (req, res) => {
  try {
    const newShowtime = await Showtime.create(req.body);
    res.status(201).json(newShowtime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a showtime
router.put('/:id', async (req, res) => {
  try {
    const showtime = await Showtime.findByPk(req.params.id);
    if (showtime) {
      await showtime.update(req.body);
      res.json(showtime);
    } else {
      res.status(404).json({ error: 'Showtime not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a showtime
router.delete('/:id', async (req, res) => {
  try {
    const showtime = await Showtime.findByPk(req.params.id);
    if (showtime) {
      await showtime.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Showtime not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
