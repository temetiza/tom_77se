// user-service/index.js
const express = require('express');
const app = express();
const port = 3001;

app.post('/register', (req, res) => {
  // Logic to handle user registration
});

app.post('/login', (req, res) => {
  // Logic to handle user login and authentication
});

app.listen(port, () => {
  console.log(`User Service running at http://localhost:${port}`);
});
