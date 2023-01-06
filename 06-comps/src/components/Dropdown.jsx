import React from 'react'
import { useState } from "react";

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (() => {
    // Setzt bei Klick den Wert des PoS jeweils auf true oder false
    setIsOpen(!isOpen);
  })

  // Test für funktinales Übertragung eines Werts aus der Map-Funktion nach drauseen
  const handleOptionClick = ((option) => {
    setIsOpen(false);
    console.log(option);
  })

  const renderedOptions = options.map((option) => {
    return(
      <div onClick={() => {handleOptionClick(option)}} key={option.value}>
        {isOpen && <div>{option.label}</div>}
      </div>
    )
  })

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      <div >{renderedOptions}</div>
    </div>
  )
}

export default Dropdown;
