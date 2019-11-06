import React, { useState } from 'react';
// import './signin-style.css';
// import dog from './dog.png'
// import API from "../../utils/API";

const Memento = props => {
  // Hook States
  const [formData, setFormData] = useState({
    date: "",
    photo: "", 
    location: "", 
    note: ""
  });

  const handleInputChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    }); 

    const { date, photo, location, note } = formData; 
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   // Determine if user exists
  //   let canLogin = false;
  //   API.getUsers().then(res => {
  //     let users = res.data;
  //     users.forEach(user => {
  //       if(loginForm.email === user.email && loginForm.password === user.password) {
  //         canLogin = true;       
  //       }
  //     });
  //     if(canLogin) {
  //       // Save credentials and redirect user
  //       return props.history.push("/user-page");
  //     } else {
  //       alert("Email and/or password are incorrect. Please try again.");
  //     }
  //   });
  // };

  return (
      <div className="post-outer">
        <div className="image-div">
          <div id="theimage"/>
          {/*<img id="imagy" src={cover} alt=""/>*/}
        </div>
        <div className  ='post-div'>
          <div id="image-outer">
            {/* <img className='pup-image' src={dog} alt=''/> */}
          </div>
          <h4 className="welcome-text">Mementos</h4>
          <input 
            value={date}
            className="input-style" 
            type="text"  
            placeholder="Date [12/25]" 
            name="date" 
            onChange={handleInputChange}
          />
          <input 
            value={photo}
            className="input-style" 
            type="text"  
            placeholder="photo link" 
            name="photo" 
            onChange={handleInputChange}
          />

          <input 
            value={location}
            className="input-style"
            type="text"
            placeholder="location"
            name="location"
            onChange={handleInputChange}
          />

          <input 
            value={note}
            className="input-field-style" 
            type="text"  
            placeholder="note" 
            name="note" 
            onChange={handleInputChange}/>
          {/* <button className="post" onClick={handleSubmit}>Post</button> */}
          {/* <div className="divider-div"/>
          <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'absolute'}}>Copyright © Korgi Inc 2019</p> */}
        </div>
      </div>
  );
}

export default Memento;
