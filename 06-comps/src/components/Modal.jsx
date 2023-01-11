import React from 'react'
import Button from "./Button";

function Modal({ onClick }) {
  return (
    <div>
      Modal Komponente
    <Button onClick={onClick}>Close</Button>
    </div>
  )
}

export default Modal
