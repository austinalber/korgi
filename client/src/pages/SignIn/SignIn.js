import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './signin-style.css';
import dog from './dog.png'
import API from "../../utils/API";

const SignInSide = props => {
  // Hook States
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Determine if user exists
    let canLogin = false;
    API.getUsers().then(res => {
      let users = res.data;
      users.forEach(user => {
        if(loginForm.email === user.email && loginForm.password === user.password) {
          canLogin = true;       
        }
      });
      if(canLogin) {
        // Save credentials and redirect user
        return props.history.push("/user-page");
      } else {
        alert("Email and/or password are incorrect. Please try again.");
      }
    });
  };

  return (
      <div className="signin-outer">
        <div className="image-div">
          <div id="theimage"/>
          {/*<img id="imagy" src={cover} alt=""/>*/}
        </div>
        <div className='signin-div'>
          <div id="image-outer">
            <img className='pup-image' src={dog} alt=''/>
          </div>
          <h4 className="welcome-text">Welcome to Korgi !</h4>
          <input className="input-style" type="email"  placeholder="Email" name="email" onChange={handleInputChange}/>
          <input className="input-style" type="password"  placeholder="Password" name="password" onChange={handleInputChange}/>
          <div className="remember-me-forgot-pass-div">
            <input className="checkbox-input" type="checkbox" id="remember-me"/>
            <label htmlFor="remember-me">Remember me</label>
            <Link to='/forgot-password'>Forgot password?</Link>
          </div>
          <button className="sign-in" onClick={handleSubmit}>Sign In</button>
          <div className="divider-div"/>
          <h6>Just in case...</h6>
          <h5 style={{marginTop: '30px'}}>Don't have an account? <Link to={'/sign-up'}>Create one</Link></h5>
          <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'absolute'}}>Copyright © Korgi Inc 2019</p>
        </div>
      </div>
  );
}

export default SignInSide;
