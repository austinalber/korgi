import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers } from "../../actions/authActions";
// import API from "../../utils/API";
import axios from "axios";
import "./style.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      users: [],
      matchedUser: {},
      results: [],
      isSeachPressed: false,
      errors: {}
    };
  }

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    axios.get("api/users/all-users")
      .then(res => {this.setState({ users: res.data })
      }).catch(err => console.log(err));
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const searchData = this.state.search;
    console.log(searchData);
    this.setState({ isSeachPressed: true });
    let usersArray = this.state.users;
    usersArray.forEach(user => {
      if(user.email === this.state.search) {
        this.setState({ matchedUser: user });
      }
    });
  };

  onAddFriend = e => {
    e.preventDefault();
    console.log("You pressed the button");
  };

  render() {
    const { errors } = this.state;
    let usersArray = this.state.users;
    

    return (
      <div className="parent-div">
        <div className="top-div">
          <p>Connect</p>
          <h5>Find a friend . . .</h5>
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
          <button className="sign-in" onClick={this.onSubmit} style={{ fontFamily: 'Kranky', fontSize: '20px'}}>Search</button>
        </div>
        <div className="results-div">
          {/* Return users by email here */}
          <div className="friends-container">
            {this.state.isSeachPressed ? (
              <div className="filtered-friends-div">
                <h1>Showing all friends with matching email</h1>
                <div className="user-div" key={this.state.matchedUser.email}>
                  <div className="img-container">
                    <img alt={this.state.matchedUser.firstName} src={this.state.matchedUser.userImage}/>
                  </div>
                  <div className="user-info">
                    <p>{this.state.matchedUser.firstName} {this.state.matchedUser.lastName}</p>
                    <p>{this.state.matchedUser.email} {this.state.matchedUser.zipcode} {this.state.matchedUser.birthday}</p>
                  </div>
                  <div className="add-friend-div">
                    <button className="add-friend" onClick={this.onAddFriend}>Add Friend</button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h1>Showing all users</h1>
                {usersArray.map(user => (
                  <div className="user-div" key={user.email}>
                    <div className="img-container">
                      <img alt={user.firstName} src={user.userImage}/>
                    </div>
                    <div className="user-info">
                      <p>{user.firstName} {user.lastName}</p>
                      <p>{user.email} {user.zipcode} {user.birthday}</p>
                    </div>
                    <div className="add-friend-div">
                      <button className="add-friend" onClick={this.onAddFriend}>Add Friend</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  getUsers: state.getUsers,
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { getAllUsers }
)(Search);
