const mongoose = require('mongoose');

const { Schema } = mongoose;

const productCardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sizes: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ProductCard', productCardSchema);
