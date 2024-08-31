require('dotenv').config(); 
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function runMigration() {
  const client = await pool.connect();
  try {
    console.log('Running migration...');

    await client.query(`
      CREATE TABLE IF NOT EXISTS SUBSCRIBERS (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Migration completed successfully');
  } catch (err) {
    console.error('Error running migration:', err.stack);
  } finally {
    client.release();
    pool.end();
  }
}
runMigration();
