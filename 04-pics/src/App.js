import React from 'react';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  // Diese Funktion ist zuständig für die Child-Parent-Kommunikation
  // Sie bekommt das Suchwort hochgeschickt und löst dann den
  // API Request aus
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    // Hier wird das Suchergebnis gleichzeitig benutzt um das PoS images
    // upzudaten. Dieses wird dann als Prop danach runtergeschickt
    setImages(result);
  };

  // Hier wird sie mit Props nach unten zur SearchBar gegeben
  return <div>
    <SearchBar onSubmit={handleSubmit} />
    <ImageList images={images} />
    </div>
}

export default App;
