const pool = require('../db/connection');
const { sendThankYouEmail } = require('./emailController');

const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    //  database
    await pool.query('INSERT INTO SUBSCRIBERS (email) VALUES ($1)', [email]);

    // Send  subscription
    await sendThankYouEmail(email);

    res.status(200).json({ message: 'Subscribed successfully and email sent' });
  } catch (err) {
    console.error('Error during subscription', err);
    if (err.code === '23505') { 
      res.status(409).json({ message: 'Email already subscribed' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = { subscribe };
