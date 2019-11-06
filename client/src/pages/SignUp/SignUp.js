import React, { useState } from 'react';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
import "./signup-style.css";
import dog from "../SignIn/dog.png";
import ImageSVG from "./ImageSVG";
import API from "../../utils/API";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Korgi Inc
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const SignUp = props => {
  // Hook States
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    zipcode: "",
    dateOfBirth: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let canMakeUser = true;
    // Run saveUser if any credentials don't match previous users
    API.getUsers().then(res => {
      let users = res.data;
      users.forEach(user => {
        if(signUpForm.email === user.email) {
          canMakeUser = false;        
        }
      });
      if(canMakeUser) {
        console.log("User can be created");
        saveUser();
      } else {
        alert("Email is already in use. Please use another email address.");
        console.log("Email is already in use")
      }
      return;
    });
  }

  const saveUser = () => {
    console.log(signUpForm);
    // Save userData

    // Re-Route to Home Page
    return props.history.push("/user-page");
  }

  return (
      <div className="signup-outer">
          <div className="image-div">
              <ImageSVG style={{width: "80%"}}/>
          </div>
          <div className='signin-div'>
              <div id="image-outer">
                  <img className='pup-image' src={dog} alt=''/>
              </div>
              <h4 className="welcome-text">Welcome Korgi's New Member !</h4>
              <input className="input-style" type="firstName"  placeholder="*First Name" name="firstName" onChange={handleInputChange}/>
              <input className="input-style" type="lastName"  placeholder="Last Name" name="lastName" onChange={handleInputChange}/>
              <input className="input-style" type="email"  placeholder="*Email" name="email" onChange={handleInputChange}/>
              <input className="input-style" type="password"  placeholder="*Password" name="password" onChange={handleInputChange}/>
              <input className="input-style" type="zipcode"  placeholder="Zipcode" name="zipcode" onChange={handleInputChange}/>
              <input className="input-style" type="dateOfBirth"  placeholder="Date of Birth: (MM/DD/YYYY)" name="dateOfBirth" onChange={handleInputChange}/>
              <div className="remember-me-forgot-pass-div">
                  <input className="checkbox-input" type="checkbox" id="remember-me"/>
                  {/* <label htmlFor="remember-me">Remember me</label> */}
                  {/* <Link to='/forgot-password'>Forgot password?</Link> */}
              </div>
              <button className="sign-in" onClick={handleSubmit}>Sign Up</button>
              <div className="divider-div"/>
              {/* <h6>Just in case...</h6> */}
              {/* <h5 style={{marginTop: '30px'}}>Don't have an account? <Link to={'/sign-up'}>Create one</Link></h5> */}
              <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'absolute'}}>Copyright © Korgi Inc 2019</p>
          </div>
      </div>
  );
}

export default SignUp; 
