import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { changeName,changeCost } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  // Holt sich Zugang zum gesamten State Objekt. PoS werden dann destrukturiert.
  const { name, cost} = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const  handleNameChange = (event) => {
    // console.log(event.target.value);
    dispatch(changeName(event.target.value));
  };
  const  handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    console.log(carCost);
    dispatch(changeCost(carCost))
  };

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form>
        <div className='field-group'>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
             />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
             />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarForm
