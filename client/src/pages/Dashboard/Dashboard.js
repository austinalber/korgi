import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, getUser, getCard } from "../../actions/authActions";
import "./dashboard-style.css";
import axios from "axios";
import image from "../../resources/images/scenery.jpeg";
import empty from "../../resources/images/empty.png";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      cards: [],
      errors: {}
    };
  }

  months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  componentDidMount() {
    axios.get("api/cards/all-cards")
      .then(res => {
        let friendData = res.data;
        let userData = this.props.auth.user.friendsList;
        let arr = [];
        friendData.forEach(card => {
          userData.forEach(friend => {
            if(card.userEmail === friend.friendEmail) {
              arr.push(card)
            }
          });
        })
        this.setState({ cards: arr, isLoading: false });
      }).catch(err => console.log(err));
      
  }

  convertDate = dateString => {
    const theDate = new Date(dateString);
    return `${this.months[theDate.getMonth()]} ${theDate.getDay()}, ${theDate.getFullYear()}`;
  };

render() {
    const { user } = this.props.auth;
    const friendCards = this.state.cards;
  return(
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
          {(friendCards.length > 0 && !this.state.isLoading) && friendCards.map(card => (
            <div className="posts-div" key={card._id}>
              <div>
                <h5>{card.userFirstName} {card.userLastName}</h5>
                <p>{this.convertDate(card.date)}</p>
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
            {(friendCards.length === 0 && !this.state.isLoading) && (
                <div className="posts-div" style={{display: "flex", flexFlow: "column wrap"}}>
                    <img className="empty-img" alt="Empty State" src={empty} style={{width: "50%"}}/>
                    <h6 style={{textAlign: "center", marginTop: "30px", color: "#999999"}}>It's so quiet here... let's make a post!</h6>
                </div>
            )}
            <div className="posts-div">
            <div>
              <h5>Austin Alber</h5>
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
          </div>
        </div>
        
       </div>
      );
      // <div className="container">
      //   <div className="task-div">
      //     <div className="weekly-task">
      //       <h5>Weekly Mission</h5>
      //       <p>Find something that you are grateful for. . .</p>
      //     </div>
      //     <div className="kudos-div">
      //       <h5>Kudos</h5>
      //       <p>Find something that you are grateful for. . .</p>
      //     </div>
      //   </div>
      //   <div className="cards-div">
      //     {placeholderCards.map(card => (
      //       <div className="posts-div" key={card._id}>
      //         <div>
      //           <h5>{card.userFirstName} {card.userLastName}</h5>
      //           <p>{card.date}</p>
      //         </div>
      //         <div>
      //           <img style={{width: "15px"}} alt="Location" src="https://image.flaticon.com/icons/svg/252/252106.svg"/>
      //           <p style={{marginLeft: "5px", fontSize: "0.8em"}}>{card.location}</p>
      //         </div>
      //         <p>{card.caption}</p>
      //         {card.postImage && (
      //           <img alt="" src={card.postImage}/>
      //       )}
      //       </div>
      //     ))}
      //   </div>
      // </div>
           
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