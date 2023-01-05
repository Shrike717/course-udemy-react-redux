import React from 'react'
import { useState } from "react";

function Dropdown({ options, isSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (() => {
    // Setzt bei Klick den Wert des PoS jeweils auf true oder false
    setIsOpen(!isOpen);
  })

  const renderedOptions = options.map((option) => {
    return(
      <div key={option.value}>
        {isOpen && <div onClick={isSelected}>{option.label}</div>}
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
