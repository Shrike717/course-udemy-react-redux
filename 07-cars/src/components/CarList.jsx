import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  // Get Array data with cars and  filter it by searchTerm
  // Return filteredCars ad PoS of name the user is typing in
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm }}) => {
    const filteredCars =  data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name
    }

  });

  const handleClickDelete = (car) => {
    dispatch(removeCar(car.id));
  };

const renderedCars = cars.map((car) => {
  const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
  return(
    <div key={car.id} className={`panel ${bold && "bold"}`}>
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
