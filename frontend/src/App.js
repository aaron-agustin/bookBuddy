// frontend/src/App.js
import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
  return (
    <div>
      <h1>Suivi de Lecture</h1>
      <BookForm />
      <BookList />
    </div>
  );
};

export default App;
