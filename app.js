require('dotenv').config(); 

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const appRoutes = require('./routes/App.route');

// Middleware
app.use(bodyParser.json());


app.use('/', appRoutes);

module.exports = app;
