import React from 'react';

function SearchBar({ onSubmit }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit("cars");
  };

  return <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
}

export default SearchBar;
