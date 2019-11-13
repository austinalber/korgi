import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import "./signup-style.css";
import dog from "../SignIn/dog.png";
import ImageSVG from "./ImageSVG";
// import API from "../../utils/API";
// import classnames from "classnames";

class SignUp extends Component  {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",
      zipcode: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      zipcode: this.state.zipcode,
      birthday: this.state.birthday,
    };

  this.props.registerUser(newUser, this.props.history); 
  };

  render() {
  const { errors } = this.state;

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
              <input className="input-style" type="firstName"  placeholder="*First Name" name="firstName" 
                onChange={this.onChange} 
                value={this.state.firstName} 
                error={errors.firstName} 
                id="firstName"
              />
              <input className="input-style" type="lastName"  placeholder="Last Name" name="lastName" 
                onChange={this.onChange} 
                value={this.state.lastName} 
                error={errors.lastName} 
                id="lastName"
              />
              <input className="input-style" type="email"  placeholder="*Email" name="email" 
                onChange={this.onChange} 
                value={this.state.email} 
                error={errors.email} 
                id="email"
              />
              <input className="input-style" type="password"  placeholder="*Password" name="password" 
                onChange={this.onChange} 
                value={this.state.password} 
                error={errors.password} 
                id="password"
              />
              <input className="input-style" type="zipcode"  placeholder="Zipcode" name="zipcode" 
                onChange={this.onChange} 
                value={this.state.zipcode} 
                error={errors.zipcode} 
                id="zipcode"
              />
              <input className="input-style" type="birthday"  placeholder="Date of Birth: (MM/DD/YYYY)" name="birthday" 
                onChange={this.onChange} 
                value={this.state.birthday} 
                error={errors.birthday} 
                id="birthday"
              />
              <div className="remember-me-forgot-pass-div">
                  <input className="checkbox-input" type="checkbox" id="remember-me"/>
                  {/* <label htmlFor="remember-me">Remember me</label> */}
                  {/* <Link to='/forgot-password'>Forgot password?</Link> */}
              </div>
              <button className="sign-in" type="submit" onClick={this.onSubmit}>Sign Up</button>
              <div className="divider-div"/>
              <h6>Just in case...</h6>
              <h5 style={{marginTop: '30px'}}>Aready have an account? <Link to={'/login'}>Login</Link></h5>
              <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'absolute'}}>Copyright © Korgi Inc 2019</p>
          </div>
      </div>
  );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));
