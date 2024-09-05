// require('dotenv').config(); 

// const { Pool } = require('pg');

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// pool.connect()
//   .then(client => {
//     console.log('Database connected successfully');
//     client.release(); 
//   })
//   .catch(err => {
//     console.error('Error connecting to the database:', err.stack);
//   });

// module.exports = pool;

require('dotenv').config(); 
const { Pool } = require('pg');

// Log environment variables for debugging (remove after testing)
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 10,  // Max number of clients in the pool
  idleTimeoutMillis: 30000,  // Close idle clients after 30 seconds
});

pool.connect()
  .then(client => {
    console.log('Database connected successfully');
    client.release(); 
  })
  .catch(err => {
    console.error('Error connecting to the database:', err.message);
    console.error('Details:', err.stack);
  });

module.exports = pool;
