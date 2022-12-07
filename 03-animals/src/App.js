import React from 'react';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {

  const [animals, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
      return <AnimalShow type={animal} key={index} />
  })
  console.log(renderedAnimals);

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {renderedAnimals}
    </div>

  )
}

export default App;
