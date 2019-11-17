import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../../utils/API";
import "./style.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      users: [],
      results: [],
      errors: {}
    };
  }

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    for(var i = 0; i < 5; i++) {
    API.getUsers(i)
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }}

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const searchData = this.state.search;
    console.log(searchData);
    // this.props.findUser(searchData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="parent-div">
        <div className="top-div">
          <p>Friend Search</p>
          <h5>Type an email in to find a friend . . .</h5>
        </div>
        <div className="bottom-div">
          <input 
              className="input-style" 
              type="search"  
              placeholder="Enter a valid email here . . ." 
              name="search" 
              id="search" 
              value={this.state.search}
              onChange={this.onChange}
              error={errors.search}
          />
          <button className="sign-in" onClick={this.onSubmit}>Search User</button>
        </div>
        <div className="results-div">
          {/* Return users by email here */}
          <div className="container">
            <div className="user-info">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
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
)(Search);
