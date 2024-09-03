const pool = require('../db/connection');
const { sendThankYouEmail } = require('./emailController');

async function subscribe(email) {
  try {

    // Insert the email into the database
    await pool.query('INSERT INTO SUBSCRIBERS (email) VALUES ($1)', [email]);

    // Send the thank-you email
    await sendThankYouEmail(email);

    const checkQuery = 'SELECT * FROM SUBSCRIBERS WHERE email = $1';
    const checkResult = await pool.query(checkQuery, [email]);

    if (checkResult.rows.length > 0) {
      return { success: false, message: 'Email is already subscribed.' };
    }



    const insertQuery = 'INSERT INTO SUBSCRIBERS (email) VALUES ($1)';
    await pool.query(insertQuery, [email]);

    return { success: true, message: 'Subscription successful.' };
  } catch (err) {
    console.error('Error during subscription', err);

    if (err.code === '23505') { 
      res.status(409).json({ message: 'Email already subscribed' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }

    return { success: false, message: 'An error occurred during subscription.' };

  }
}

module.exports = { subscribe };


