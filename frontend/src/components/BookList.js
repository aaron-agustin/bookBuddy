// frontend/src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/books');
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book._id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.status}</p>
          <p>{book.pages} pages</p>
          <p>{book.category}</p>
          {book.image && <img src={book.image} alt={book.title} />}
        </div>
      ))}
    </div>
  );
};

export default BookList;
