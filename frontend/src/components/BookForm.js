// frontend/src/components/BookForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    image: '',
    status: 'à lire',
    pages: '',
    category: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/books/add', book);
      setMessage('Livre ajouté avec succès!');
    } catch (err) {
      setMessage('Erreur lors de l\'ajout du livre');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Titre" value={book.title} onChange={handleChange} required />
      <input name="author" placeholder="Auteur" value={book.author} onChange={handleChange} required />
      <input name="image" placeholder="URL de l'image" value={book.image} onChange={handleChange} />
      <select name="status" value={book.status} onChange={handleChange} required>
        <option value="à lire">à lire</option>
        <option value="en cours de lecture">en cours de lecture</option>
        <option value="fini">fini</option>
      </select>
      <input name="pages" placeholder="Nombre de pages" value={book.pages} onChange={handleChange} required type="number" />
      <input name="category" placeholder="Catégorie" value={book.category} onChange={handleChange} required />
      <button type="submit">Ajouter le livre</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default BookForm;
