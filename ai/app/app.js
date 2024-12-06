const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body {
          background-color: #0096FF;
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 2rem;
          color: white;
          font-size: 3rem;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      Docker is great for AI
    </body>
  </html>`);
});

app.listen(5005, () => {
  console.log('App listening on port 5005!');
});
