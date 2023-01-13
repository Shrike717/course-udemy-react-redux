import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ onClose, children, actionBar }) {
  return ReactDOM.createPortal(
    <div>
      <div className='absolute inset-0 bg-gray-300 opacity-80 md-w-full sm-w-full' onClick={onClose}></div>
      <div className='absolute inset-40 p-10 bg-white overflow-hidden'>
        <div className='flex flex-col justify-between h-full'>
          {children}
          <div className='flex justify-end'>
            {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
