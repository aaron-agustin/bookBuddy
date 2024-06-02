// backend/routes/books.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.post('/add', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
