import React from 'react';

function BookShow({ book }) {

  return <div className='book-show'>
    { book.title }
  </div>;
}

export default BookShow;
