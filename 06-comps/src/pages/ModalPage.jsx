import React from 'react'
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const onClose = () => {
    setShowModal(false);
  }

  return (
    <div>
      <Button onClick={handleClick} primary>Open Modal</Button>
      { showModal && <Modal onClick={onClose}/> }
    </div>
  );
}

export default ModalPage;
