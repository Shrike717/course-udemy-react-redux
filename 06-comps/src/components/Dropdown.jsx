import React from 'react'
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

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
      <Panel
        className='flex justify-between items-center cursor-pointer' onClick={handleClick}
        >
        {value?.label || "Selected..."}
        {icon}
      </Panel>
      {isOpen && (
      <Panel className='absolute top-full'>
        {renderedOptions}
      </Panel>)}
    </div>
  )
}

export default Dropdown;
