import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Uploader from '../components/Uploader';
// import { logoutUser, getUser } from "../../actions/authActions";
// import './signin-style.css';
// import dog from './dog.png'
// import API from "../../utils/API";

class Memento extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      userImage: "",
      postImage: "",
      caption: "",
      location: "",
      date: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const postData = {
      userId: "",
      userImage: "",
      postImage: "",
      caption: "",
      location: "",
      date: ""
    };

    console.log(postData);
  }

  render() {
    // const { errors } = this.state;

    return (
        <div className="post-outer">
          {/* <div className="image-div"> */}
            {/* <div id="theimage"/> */}
            {/*<img id="image" src={cover} alt=""/>*/}
          {/* </div> */}
          <div className  ='post-div'>
            {/* <div id=""> */}
              {/* <img className='pup-image' src={dog} alt=''/> */}
            {/* </div> */}
            <h4 className="welcome-text">Mementos</h4>
            <input 
              value={this.state.date}
              className="input-style" 
              type="date"  
              placeholder="Date of Post (MM/DD/YYYY)" 
              name="date" 
              onChange={e => this.onChange}
            />
            <input 
              value={this.state.postImage}
              className="input-style" 
              type="postImage"  
              placeholder="Post Image" 
              name="postImage" 
              onChange={e => this.onChange}
            />
            <input 
              value={this.state.location}
              className="input-style"
              type="location"
              placeholder="Location"
              name="location"
              onChange={e => this.onChange}
            />
            <input 
              value={this.state.caption}
              className="input-field-style" 
              type="caption"  
              placeholder="Caption" 
              name="caption" 
              onChange={e => this.onChange}
            />
            {/* <Link to="/user-page"> */}
            <button className="post" onClick={this.onSubmit}>Post Card!</button>
            {/* </Link> */}
            {/* <div className="divider-div"/>
            <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'absolute'}}>Copyright © Korgi Inc 2019</p> */}
            <Uploader />
          </div>
        </div>
    );
  }
}

Memento.propTypes = {
  // postCard: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { }
)(Memento);
