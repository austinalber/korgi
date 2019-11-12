import React, { useState } from "react"; 

// The useState hook returns an array with two properties 
// which are show and setShow. setShow is a function used 
// to update the state and show is a value, useState holds the current state

const Modal = props => {
  const [show, setShow] = useState(false); 
  const openModal = () => setShow(true); 
  const closeModal = () => setShow(false); 

// !show in front of button element so that button only renders when a modal is not open 
  return (
    <div className="Modal">
      <h3>Create a moment with the Korgi community</h3>
      {!show && <button onClick={openModal}>Show modal</button>}
    </div>
   ); 
}

export default Modal; 