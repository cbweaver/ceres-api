'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    common: [String],
    scientific: String
  },
  climate: {
    temperature: {
      min: Number,
      max: Number
    }
  }
});

module.exports = mongoose.model('Plant', schema);
