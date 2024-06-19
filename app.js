const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route to serve the portfolio website
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Portfolio_website.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
