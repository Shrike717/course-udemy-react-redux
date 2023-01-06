import React from 'react'
import { useState } from "react";

function Dropdown({ options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (() => {
    // Setzt bei Klick den Wert des PoS jeweils auf true oder false
    setIsOpen(!isOpen);
  })

  // Funktionales Übertragung eines Werts aus der Map-Funktion nach drausen
  const handleOptionClick = ((option) => {
    // Klaoppt Menu wieder ein
    setIsOpen(false);
    // Schickt Objekt option nach oben zur arent
    onSelect(option);
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
      <div onClick={handleClick}>
        {selected?.label || "Selected..."}
      </div>
      <div >{renderedOptions}</div>
    </div>
  )
}

export default Dropdown;
