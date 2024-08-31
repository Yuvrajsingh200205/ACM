const express = require('express');
const router = express.Router();
require('../db/connection'); 
const { subscribe } = require('../controller/subscriptionController');


router.post('/subscribe', subscribe);
module.exports = router;
