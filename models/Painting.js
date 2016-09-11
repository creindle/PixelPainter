const mongoose = require('mongoose');

const Painting = mongoose.model(
  'Painting',
  {
    colors: String
  });

module.exports = Painting;