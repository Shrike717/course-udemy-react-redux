import {useState} from 'react';
import React from 'react';

function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("new title", title);
  };

  return <div>
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title:</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>
        Save
      </button>
    </form>
  </div>;
}

export default BookEdit;
