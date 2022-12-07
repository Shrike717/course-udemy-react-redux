import React from 'react';
import { useState } from 'react';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {

  const [animals, setAnimal] = useState([]);
  console.log(animals);

  const handleClick = () => {
    setAnimal([...animals, getRandomAnimal()]);
  }
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>

  )
}

export default App;
