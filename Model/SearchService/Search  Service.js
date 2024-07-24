// search-service/index.js
const express = require('express');
const app = express();
const port = 3002;

app.get('/search', (req, res) => {
  // Logic to handle book search
});

app.listen(port, () => {
  console.log(`Search Service running at http://localhost:${port}`);
});
