import React from 'react'
import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      // console.log(divEl.current);
    };
    // Event Listener um Klicks zu ermitteln.
    document.addEventListener('click', handler, true);
    // Clear Funktion für Event  Listener
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = (() => {
    // Setzt bei Klick den Wert des PoS jeweils auf true oder false
    setIsOpen(!isOpen);
  })

  // Funktionales Übertragung eines Werts aus der Map-Funktion nach drausen
  const handleOptionClick = ((option) => {
    // Klaoppt Menu wieder ein
    setIsOpen(false);
    // Schickt Objekt option nach oben zur Parent
    onChange(option);
  })

  const icon = <span className="text-2xl">
  {isOpen ? <GoChevronDown /> :  <GoChevronLeft />}
</span>

  // Map Funktion rendert die Optionen in der ausgeklappten Liste
  const renderedOptions = options.map((option) => {
    return(
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => {handleOptionClick(option)}} key={option.value}>
        {option.label}
      </div>
    )
  })

  return (
    // Hier wird devEl an das root Element des Dropdown gesetzt.
    <div ref={divEl} className='w-48 relative'>
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
