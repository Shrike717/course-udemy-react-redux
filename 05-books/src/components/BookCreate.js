import React from 'react';
import { useState } from "react";

function BookCreate({ onCreate} ) {
  const [title, setTitle] = useState("");

  // Eventt-Handler fürs input-Tag: Überwacht das input-Feld und setzt PoS
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // Event-Handler fürs form-Tag: Ruft Event-handler in Parent und schickt das PoS hoch
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  }

  return <div className='book-create'>
    <h3>Add a book:</h3>
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input className="input" value={title} onChange={handleChange}/>
      <button className='button'>Create!</button>
    </form>
  </div>
}

export default BookCreate;
