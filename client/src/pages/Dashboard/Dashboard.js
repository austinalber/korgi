import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, getUser, getCard } from "../../actions/authActions";
import "./dashboard-style.css";
import image from "../../resources/images/scenery.jpeg";
import axios from "axios";
// import API from "../../utils/API";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      errors: {}
    };
  }

  componentDidMount() {
    axios.get("api/cards/all-cards")
      .then(res => {
        let data = res.data;
        let arr = [];
        data.forEach(card => {
          if(card.userEmail === this.props.auth.email) {
            arr.push(card)
          }
        });
        this.setState({ cards: arr });
      }).catch(err => console.log(err));
  }

render() {
    const { user } = this.props.auth;
    const userCards = this.state.cards;
    console.log(this.state.cards);
    // let cards = this.props.getCard(user.id);
    // console.log(cards);
    return (
      <div className="dash-container">
        <div className="user-profile">
          <div className="profile-image-div">
            <img alt={user.firstName} src={user.userImage} />
            <h5 style={{textAlign: "center", marginTop: "20px"}}>{user.firstName} {user.lastName}</h5>
          </div>
          <div className="info-div">
            <div>
              <img className="icon" alt="Email" src="https://image.flaticon.com/icons/svg/1033/1033956.svg"/>
              <p>{user.email}</p>
            </div>
            <div>
              <img className="icon" alt="Birthday" src="https://image.flaticon.com/icons/svg/864/864800.svg"/>
              <p>{user.birthday}</p>
            </div>
            <div>
              <img className="icon" alt="Location" src="https://image.flaticon.com/icons/svg/252/252106.svg"/>
              <p>{user.zipcode}</p>
            </div>
          </div>
        </div>
        <div className="user-posts">
          {/* Will map all posts here */}
          {userCards.map(card => (
            <div className="posts-div">
              <div>
                <h5>{this.props.auth.firstName} {this.props.auth.lastName}</h5>
                <p>{card.date}</p>
              </div>
              <div>
                <img style={{width: "15px"}} alt="Location" src="https://image.flaticon.com/icons/svg/252/252106.svg"/>
                <p style={{marginLeft: "5px", fontSize: "0.8em"}}>{card.location}</p>
              </div>
          <p>{card.caption}</p>
              {card.postImage && (
                  <img alt="" src={card.postImage}/>
              )}
            </div>
          ))}
          {/* <div className="posts-div">
            <div>
              <h5>{user.firstName} {user.lastName}</h5>
              <p>November 14th, 2019</p>
            </div>
            <div>
              <img style={{width: "15px"}} alt="Location" src="https://image.flaticon.com/icons/svg/252/252106.svg"/>
              <p style={{marginLeft: "5px", fontSize: "0.8em"}}>Denver, Colorado</p>
            </div>
            <p>
              Found this incredible view while hiking west of downtown Denver this past Summer! What an incredible trip that was!
            </p>
            {image && (
                <img alt="" src={image}/>
            )}
          </div> */}
            {/* End mapping */}
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