require('dotenv').config(); 
const pool = require('./connection'); 

async function runSeed() {
  const client = await pool.connect();
  try {
    console.log('Running seed...');

    
    await client.query(`
      INSERT INTO SUBSCRIBERS (email) VALUES ('testuser@example.com')
      ON CONFLICT (email) DO NOTHING;
    `);

    console.log('Seed completed successfully');
  } catch (err) {
    console.error('Error running seed:', err.stack);
  } finally {
    client.release(); 
    pool.end(); 
  }
}

runSeed();
