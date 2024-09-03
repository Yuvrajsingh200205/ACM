
const express = require('express');
const helmet = require('helmet');
const appRoutes = require('./routes/App.route');
const cspMiddleware = require('./middleware/cspMiddleware');
const app = express();
app.use(helmet());

// Set CSP header with Helmet
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://example.com"],
    styleSrc: ["'self'", "https://fonts.googleapis.com"],
    imgSrc: ["'self'", "data:"],
    connectSrc: ["'self'", "https://api.example.com"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    objectSrc: ["'none'"],
    frameAncestors: ["'none'"],
  }
}));

app.use(express.json()); 
// Use the routes
app.use('/', appRoutes);

module.exports = app;


