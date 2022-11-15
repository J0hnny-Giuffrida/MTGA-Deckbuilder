//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');

//CONFIGURATION
require('dotenv').config();
const app = express();

//MIDDLEWARE
app.use(express.json());

//ROUTES
app.get('/', (req, res) => {
    res.send('You have reached the Home Page Route');
})

//PORT
const PORT = process.env.PORT || 8000;

//LISTENER
app.listen(PORT, () => {
    console.log(`Server started on Port: ${PORT}`)
});