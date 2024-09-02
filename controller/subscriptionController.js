const pool = require('../db/connection');
const { sendThankYouEmail } = require('./emailController');

async function subscribe(email) {
  try {
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
    return { success: false, message: 'An error occurred during subscription.' };
  }
}

module.exports = { subscribe };


