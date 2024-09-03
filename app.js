
const express = require('express');
const appRoutes = require('./routes/App.route');

const app = express();
app.use(express.json()); 

// Use the routes
app.use('/', appRoutes);

module.exports = app;


