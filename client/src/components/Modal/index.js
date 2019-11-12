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
  )
}

export default Modal; 


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




