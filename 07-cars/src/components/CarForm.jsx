import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  // Holt sich Zugang zum gesamten State Objekt
  const name = useSelector((state) => {
    return state.form.name;
  });

  const  handleNameChange = (event) => {
    console.log(event.target.value);
    dispatch(changeName(event.target.value))
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
        </div>
      </form>
    </div>
  )
}

export default CarForm
