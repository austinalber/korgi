import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, getUser, getCard } from "../../actions/authActions";
import "./dashboard-style.css";
import image from "../../resources/images/scenery.jpeg";
// import API from "../../utils/API";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {

    const { user } = this.props.auth;
    // let cards = this.props.getCard(user.id);
    // console.log(cards);
return (
  <div className="container">
    <div className="outer-div">
      <div className="user-profile">
        <h1>Your Profile:</h1>
        <div className="image-div">
          <img alt={user.firstName} src={user.userImage} />
        </div>
        <div className="info-div">
          <h2><b>Name: </b>{user.firstName} {user.lastName}</h2>
          <h2><b>Email: </b>{user.email}</h2>
          <h2><b>Birthday: </b>{user.birthday}</h2>
          <h2><b>Zipcode: </b>{user.zipcode}</h2>
        </div>
      </div>
    </div>
    <div className="center-div">
      <div className="divider-div"/>
      <div className="user-posts">
        <h1 className="post-header">Your Post History:</h1>
        {/* Will map all posts here */}
        <div className="posts-div">
          <div className="post-image">
            <img alt="" src={image}/>
          </div>
          <div className="post-caption">
            <p>
              Found this incredible view while hiking west of downtown Denver this past Summer! What an incredible trip that was!
            </p>
          </div>
          <div className="post-location">
            <i>Denver, Colorado.</i>
          </div>
          <div className="post-date">
            <p>November 14th, 2019</p>
          </div>
        </div>
        <div className="divider-div-blank"/>
        {/* End mapping */}
      </div>
    </div>
  </div>
    );
  }
}
Dashboard.propTypes = {
  getUser: PropTypes.func.isRequired,
  getCard: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, getUser, getCard }
)(Dashboard);