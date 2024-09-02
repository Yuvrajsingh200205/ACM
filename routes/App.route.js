const express = require('express');
const router = express.Router();
const { subscribe } = require('../controller/subscriptionController');
const { aaryan } = require('../controller/hii');


router.get('/', aaryan);

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  const result = await subscribe(email);
  return res.status(result.success ? 200 : 400).json(result);
});

module.exports = router;
