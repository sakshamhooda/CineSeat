const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simple route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to CineSeat backend!' });
});

// Synchronize models with database
sequelize.sync({ force: false }).then(() => {
    console.log('Database synced.');
});

// Set up the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const theaterRoutes = require('./routes/theaterRoutes');
const showtimeRoutes = require('./routes/showtimeRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

console.log('userRoutes:', userRoutes);
console.log('movieRoutes:', movieRoutes);
console.log('theaterRoutes:', theaterRoutes);
console.log('showtimeRoutes:', showtimeRoutes);
console.log('reservationRoutes:', reservationRoutes);

app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/theaters', theaterRoutes);
app.use('/api/showtimes', showtimeRoutes);
app.use('/api/reservations', reservationRoutes);

app.get('/test', (req, res) => {
  res.send('Test route works!');
});


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to CineSeat backend!' });
  });
  
  // Sync models and start server
  sequelize.sync({ force: false }).then(() => {
    console.log('Database synced.');
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  });