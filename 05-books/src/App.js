import React from 'react';
import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const CreateBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: 123, title }
    ]
    setBooks(updatedBooks);
  };

  return <div>
    {books.length}
    <BookCreate onCreate={CreateBook} />
  </div>;
}

export default App;
