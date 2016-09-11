const mongoose = require('mongoose');

const Painting = mongoose.model(
  'Painting',
  {
    canvas: [[String]],
    pallet: {
      colors: [String],
      selected: String
    }
  });

module.exports = Painting;