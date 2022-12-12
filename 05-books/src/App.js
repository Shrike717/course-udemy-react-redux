import React from 'react';
import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const CreateBook = (title) => {
    console.log("Need to add book with:" , title);
  };

  return <div>
    <BookCreate onCreate={CreateBook} />
  </div>;
}

export default App;
