import React from 'react';
import './SearchBar.css';
import { useState } from 'react';

// Hier kommt handleSubmit aus der App.js als Prop an.
// Hier ist der Name onSubmit willkürlich.
// Er muss aber gleich sein wiee in App.js

function SearchBar({ onSubmit }) {
  // Hier wird das PoS gesetzt
  const [term, setTerm] = useState('');

  // Diese Funktion wird gebraucht um das Default-Submit-Verhalten
  // des Browsers zu unterbrechen.
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Hier wird handleSubmit aus der App.js aufgerufen und
    // das Suchwort wieder nach oben geschickt.
    onSubmit(term)
  };

  // Diese Funktion wird gebraucht um React die Kontrolle über das Eingabefeld
  // zu ermöglichen. Der Suchbegriff wird ausgelesen und dabei
  // gleichzeitig das PoS damit upgedatet.

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  // Hier wird handleFormSubmit mit Props (Keyword onSubmit) an das form-Tag gedockt
  // um das Default-Verhalten zu unterbrechen.

  // Am input-Tag wird jede Eingabe abgefangen und updatet damit das PoS
  // Dann wird mit value die Eingabe ins input-Feld gezwungen.
  return <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label className='search-bar-label'>Enter Search Term:</label>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
};

export default SearchBar;
