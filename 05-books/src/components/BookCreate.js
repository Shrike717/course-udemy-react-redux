import React from 'react';
import { useState } from "react";

function BookCreate({ onCreate} ) {
  const [title, setTitle] = useState("");

  // Überwacht das input-Feld und setzt PoS
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // Schickt das PoS hoch
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input value={title} onChange={handleChange}/>
      <button>Create!</button>
    </form>
  </div>;
}

export default BookCreate;
