import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Uploader from "../../components/Uploader";
import { postCard } from "../../actions/authActions";
import "./style.css";
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
      // date: "",
      errors: {}
    };
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
    const postData = {
      userId: this.props.auth.user.id,
      userImage: this.props.auth.user.userImage,
      postImage: this.state.postImage,
      caption: this.state.caption,
      location: this.state.location
      // date: ""
    };

    console.log(postData);
    this.props.postCard(postData);
  }

  render() {
    const { errors } = this.state;

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
            {/* <input 
              value={this.state.date}
              className="input-style" 
              type="date"
              name="date" 
              id="date"
              onChange={this.onChange}
              error={errors.date}
            /> */}
            <input 
              value={this.state.caption}
              className="input-style" 
              type="caption"  
              placeholder="Caption" 
              name="caption" 
              id="caption"
              onChange={this.onChange}
              error={errors.caption}
            />
            <input 
              value={this.state.postImage}
              className="input-style" 
              type="postImage"  
              placeholder="Post Image" 
              name="postImage"
              id="postImage" 
              onChange={this.onChange}
              error={errors.postImage}
            />
            <input 
              value={this.state.location}
              className="input-style"
              type="location"
              placeholder="Location"
              name="location"
              id="location"
              onChange={this.onChange}
              error={errors.location}
            />
            {/* <Link to="/user-page"> */}
            <button className="post-card" onClick={this.onSubmit}>Post Card!</button>
            {/* </Link> */}
            <div className="divider-div"/>
            {/* <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'absolute'}}>Copyright © Korgi Inc 2019</p> */}
            <Uploader />
          </div>
        </div>
    );
  }
}

Memento.propTypes = {
  postCard: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { postCard }
)(Memento);
