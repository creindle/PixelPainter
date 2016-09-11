const express = require('express');

const app = express();

const models = require('./models');

app.get('/api/pixelPainter', (req, res) => {
  models.Painting
    .find({})
    .then(results => res.json(results));
});

module.exports = app;