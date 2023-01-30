import { createSlice,nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      // Assumption:
      // action.payload === { name: "ab", cost: 140}
      state.cars.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      })
    },
    removeCar(state, action) {
      // Assumption:
      // action.payload === The  id of the car we want to remove
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updated;
    },
  }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer;
