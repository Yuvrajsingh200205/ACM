const express = require('express');
const router = express.Router();
require('../db/connection'); 
const { subscribe } = require('../controller/subscriptionController');
const { aaryan } = require('../controller/hii');

router.get('/',aaryan);
router.post('/subscribe', subscribe);
module.exports = router;
