// frontend/src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  // Définir l'état initial pour stocker la liste des livres
  const [books, setBooks] = useState([]);

  // Utiliser useEffect pour exécuter le fetch des livres lorsque le composant est monté
  useEffect(() => {
    // Fonction asynchrone pour récupérer les livres depuis l'API
    const fetchBooks = async () => {
      try {
        // Envoyer une requête GET pour récupérer les livres
        const res = await axios.get('http://localhost:5000/api/books');
        // Mettre à jour l'état avec les données des livres
        setBooks(res.data);
      } catch (err) {
        // Gérer les erreurs éventuelles
        console.error(err);
      }
    };

    // Appeler la fonction fetchBooks
    fetchBooks();
  }, []); // Le tableau vide signifie que l'effet s'exécute une seule fois, au montage

  return (
    // Afficher la liste des livres
    <div>
      {books.map((book) => (
        // Utiliser l'ID du livre comme clé unique pour chaque élément
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
