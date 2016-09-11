const express = require('express');
const mongoose = require('mongoose');
const models = require('./models');
const app = express();

const MONGO_URL = 'mongodb://localhost/pixel-painter';
mongoose.connect(MONGO_URL);

const PORT = 8080;

mongoose.connection.once('open', function() {
  const server = app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);

    var paint = new models.Painting({ colors: "Blue" });
    paint.save(function (err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    })
  });
});

