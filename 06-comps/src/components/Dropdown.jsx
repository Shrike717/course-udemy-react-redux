import React from 'react'
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
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
    onChange(option);
  })

  const icon = <span className="text-2xl">
  {isOpen ? <GoChevronDown /> :  <GoChevronLeft />}
</span>

  const renderedOptions = options.map((option) => {
    return(
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => {handleOptionClick(option)}} key={option.value}>
        {option.label}
      </div>
    )
  })

  return (
    <div className='w-48 relative'>
      <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleClick}>
        {value?.label || "Selected..."}
        {icon}
      </div>
      {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown;
