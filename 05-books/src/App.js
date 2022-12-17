import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  // Fetches all records. Returns Object. Records are in data prop
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  // Runs only on initial render
  useEffect(() => {
    fetchBooks();
  }, []);

  // POST request creates record
  const CreateBook = async (title) => {
   const response = await axios.post("http://localhost:3001/books", {
      title,
    })

    const updatedBooks = [...books, response.data]
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, ...response.data}
      }
      return book;
    }
    );
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(updatedBooks);
  };



  return <div className='app'>
    <h1>Reading List</h1>
    <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
    <BookCreate onCreate={CreateBook} />
  </div>;
}

export default App;
