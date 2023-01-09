import React from 'react'
import { createContext } from "rect";

const NavigationContext = createContext();

function NavigationProvider({ children }) {

  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider };
export default NavigationContext;
