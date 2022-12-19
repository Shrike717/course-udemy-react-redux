import { useState } from "react";
import React from 'react';
import BookEdit from "./BookEdit";
import useBooksContext from '../hooks/use-books-context';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    // Setzt PoS auf true
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <span>Title: <h3>{book.title}</h3></span>
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit}/>;
  };

  return <div className='book-show'>
  <img className="books" src={`https://picsum.photos/seed/${book.id}/300/200`} alt=""/>
  <div>{content}</div>
    <div className='actions'>
      <button className="edit" onClick={handleEditClick}>
        Edit
      </button>
      <button className='delete' onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  </div>;
}

export default BookShow;
