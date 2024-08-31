const pool = require('./connection');

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS SUBSCRIBERS (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL
  );
`;


pool.query(createUsersTable)
  .then(() => console.log("subscriber table created"))
  .catch(err => console.error("Error creating users table", err));


