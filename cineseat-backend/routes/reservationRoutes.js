const express = require('express');
const router = express.Router();
const { Reservation } = require('../models');

// Get all reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a reservation by ID
router.get('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).json({ error: 'Reservation not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new reservation
router.post('/', async (req, res) => {
  try {
    const newReservation = await Reservation.create(req.body);
    res.status(201).json(newReservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a reservation
router.put('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      await reservation.update(req.body);
      res.json(reservation);
    } else {
      res.status(404).json({ error: 'Reservation not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a reservation
router.delete('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      await reservation.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Reservation not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports=router;
