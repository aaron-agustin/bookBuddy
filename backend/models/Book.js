// backend/models/Book.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String },
  status: { type: String, required: true },
  pages: { type: Number, required: true },
  category: { type: String, required: true }
});

module.exports = mongoose.model('Book', BookSchema);
