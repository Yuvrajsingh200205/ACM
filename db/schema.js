// const pool = require('./connection');

// const createUsersTable = `
//   CREATE TABLE IF NOT EXISTS SUBSCRIBERS (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255) UNIQUE NOT NULL
//   );
// `;


// pool.query(createUsersTable)
//   .then(() => console.log("subscriber table created"))
//   .catch(err => console.error("Error creating users table", err));


const pool = require('./connection');

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS SUBSCRIBERS (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

pool.query(createUsersTable)
  .then(() => console.log("Subscriber table created"))
  .catch(err => {
    console.error("Error creating subscriber table:", err.message);
    console.error("Details:", err.stack);
  });
