import React from 'react';
import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from '../context/books';

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
  })

  return <div className='book-list'>
    {count}
    <button onClick={incrementCount}>Count</button>
    {renderedBooks}
    </div>;
}

export default BookList;
