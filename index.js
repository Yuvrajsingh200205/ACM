require('dotenv').config(); 

const app = require('./app');

// const PORT = process.env.PORT || 9999;


app.listen(9999, () => {
  console.log(`Server is running on port ${9999}`);
});

