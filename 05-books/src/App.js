import React from 'react';
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const CreateBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      }
    ]
    setBooks(updatedBooks);
  };

  return <div className='app'>
    <BookList books={books} />
    <BookCreate onCreate={CreateBook} />
  </div>;
}

export default App;
