

const pool = require('../db/connection');
const { sendThankYouEmail } = require('./emailController');

async function subscribe(email) {
  try {
    // Insert the email into the database
    const insertQuery = 'INSERT INTO SUBSCRIBERS (email) VALUES ($1)';
    await pool.query(insertQuery, [email]);

    // Send the thank-you email
    await sendThankYouEmail(email);

    return { success: true, message: 'Subscription successful.' };
  } catch (err) {
    console.error('Error during subscription', err);

    // Handle duplicate email error
   try {
     if (err.code === '23505') { // Unique violation error code in PostgreSQL
       return { success: false, message: 'Email already subscribed.' };
     } else {
       return { success: false, message: 'Server error occurred during subscription.' };
     }
   } catch (error) {
       //ToDo:handle
       console.log("Error");
   }
  }
}

module.exports = { subscribe };


