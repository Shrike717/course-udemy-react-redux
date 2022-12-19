import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

// Custom Povider with the whole logic and parts which are to be shared
const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // Fetches all records. Returns Object. Records are in data prop
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

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

  // Object which will be shared
  const valueToShare = {
    books: books,
    deleteBookById,
    editBookById,
    CreateBook,
    fetchBooks,
  };


  return (
    // Buildin-Provider with object shared
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>)
};

export { Provider };
export default BooksContext;
