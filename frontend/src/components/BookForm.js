// frontend/src/components/BookForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  // Définir l'état initial du formulaire avec les champs du livre
  const [book, setBook] = useState({
    title: '',
    author: '',
    image: '',
    status: 'à lire',
    pages: '',
    category: ''
  });

  // Définir l'état pour afficher les messages de succès ou d'erreur
  const [message, setMessage] = useState('');

  // Gérer les changements de valeur dans les champs du formulaire
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer une requête POST pour ajouter un nouveau livre
      const res = await axios.post('http://localhost:5000/api/books/add', book);
      setMessage('Livre ajouté avec succès!');
    } catch (err) {
      // Afficher un message d'erreur en cas d'échec
      setMessage('Erreur lors de l\'ajout du livre');
    }
  };

  return (
    // Formulaire pour ajouter un livre
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
