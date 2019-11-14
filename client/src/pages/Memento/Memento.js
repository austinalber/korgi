import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postCard } from "../../actions/authActions";
import "./style.css";

class Memento extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      userImage: "",
      postImage: "",
      caption: "",
      location: "",
      picture: "",
      errors: {}
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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
      postImage: this.state.picture,
      caption: this.state.caption,
      location: this.state.location
    };

    this.props.postCard(postData);
  }

  photoUpload = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        picture: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="post-outer">
          <h4 className="welcome-text">Share your story !</h4>
          <div className  ='post-div'>
            <label className="custom-file-upload fas">
              <div className="img-wrap img-upload">
                <img alt="" src={this.state.picture}/>
              </div>
              <input type="file" id="postImage" value={this.state.postImage} onChange={this.photoUpload}/>
            </label>
          <div className="text-div">
              <input type="file" accept="image/x-png,image/jpeg" title=" "/>
              {errors.postImage && (
                  <p className="error-text">{errors.postImage}</p>
              )}
              <input
                  value={this.state.location}
                  className="input-style"
                  type="text"
                  placeholder="Location"
                  name="location"
                  id="location"
                  onChange={this.onChange}
                  error={errors.location}
                  style={{width: "100%"}}
              />
              {errors.location && (
              <p className="error-text">{errors.location}</p>
              )}
              <textarea
                  value={this.state.caption}
                  className="input-style"
                  placeholder="Caption"
                  id="caption"
                  onChange={this.onChange}
                  error={errors.caption}
              />
              {errors.caption && (
              <p className="error-text">{errors.caption}</p>
              )}
              <button className="post-card" onClick={this.onSubmit}>Post Card!</button>
          </div>
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
