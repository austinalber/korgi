import React, { useState } from "react"; 
import Modal from "../../components/Modal"; 

import './style.css';

// The useState hook returns an array with two properties 
// which are show and setShow. setShow is a function used 
// to update the state and show is a value, useState holds the current state

const Modals = (props) => {
  const [show, setShow] = useState(false); 
  const openModal = () => setShow(true); 
  const closeModal = () => setShow(false); 

// !show in front of button element so that button only renders when a modal is not open 
  return (
    <div className="Modal">
      {!show && <button onClick={openModal}>{props.text}</button>}
      <Modal closeModal={closeModal} show={show} />
    </div>
   ); 
}

export default Modals; 

// return (
//   <div class="modal fade" id="overlay">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <button type="button" class="close" data-dismiss="modal" aria-hidden="false">&times;=</button>
//         <h4 class="modal-title">Hello</h4>
//       </div>
//       <div class="modal-body">
//         <p>Thank you for becoming a part of the Korgi community. Take a journey with us for one year - 52 unique experiences</p>
//       </div>
//     </div>
//   </div>
// </div>
// )
// }