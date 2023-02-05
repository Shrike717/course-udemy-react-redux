import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  }
});

// console.log(store.getState());
export * from "./thunks/fetchUsers";
