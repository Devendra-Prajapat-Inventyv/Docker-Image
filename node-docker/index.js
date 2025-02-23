// index.js

const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like images) from the "public" folder
app.use(express.static('public'));

// Route to serve the page with the Docker image centered
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Docker Image Centered</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <div class="container">
          <img src="docker-logo.png" alt="Docker Logo" class="docker-image" />
        </div>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
