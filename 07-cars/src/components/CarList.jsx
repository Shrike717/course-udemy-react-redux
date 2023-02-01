import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  // Get Array data with cars
  const cars = useSelector(({ cars: { data, searchTerm }}) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleClickDelete = (car) => {
    dispatch(removeCar(car.id));
  };

const renderedCars = cars.map((car) => {
  return(
    <div key={car.id} className="panel">
      <p>{car.name} - ${car.cost}</p>
      <button
        className="button is-danger"
        onClick={() => handleClickDelete(car)}
        >
        Delete
        </button>
    </div>
  )
})
  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList
