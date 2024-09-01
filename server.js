const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./config/models');

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

