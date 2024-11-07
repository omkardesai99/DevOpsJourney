const express = require('express');
// const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 3001;

// app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

