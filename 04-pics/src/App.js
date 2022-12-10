import React from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';

function App() {
  // Diese Funktion ist zuständig für die Child-Parent-Kommunikation
  // Sie bekommt das Suchwort hochgeschickt und löst dann den
  // API Request aus
  const handleSubmit = async (term) => {
    const results = await searchImages(term);
    console.log(results);
  };

  // Hier wird sie mit Props nach unten zur SearchBar gegeben
  return <div>
    <SearchBar onSubmit={handleSubmit} />
    </div>
}

export default App;
