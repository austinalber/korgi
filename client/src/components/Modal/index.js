import React from 'react'; 
  
const Modal = (props) => {
  // Modal component is accepting two props(show, closeModal)
  const { show, closeModal } = props; 

  // adding a modal class to div element if only show prop 
  // is true otherwise we are adding hide class
  
  return (
    <React.Fragment>
      <div className={show ? "modal": "hide"}>
        <button onClick={closeModal}>X</button>
        <h1>Modal</h1>
      </div>
    </React.Fragment>
  ); 
}

export default Modal; 







