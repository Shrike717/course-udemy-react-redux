import React from 'react';
import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  console.log(books);

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

  return <div>
    {books.length}
    <BookCreate onCreate={CreateBook} />
  </div>;
}

export default App;
