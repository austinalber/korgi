import React, { Component } from "react";
// import Input from "./components/Input";
// import Button from "./components/Button";
import API from "../../utils/API";
import { FriendList, FriendListItem } from "../../components/FriendList";
import TaskBar from "../../components/TaskBar"; 
import Modals from '../Modals'; 
import "./UserPageStyle.css";


class UserPage extends Component {
  // state is where we initialize the start of our event 
  state = {
    friends: [],
    cards: [],
    search: "",
    results: []
  };

  // When this component mounts, search for our friend array database with findAll()
  componentDidMount() {
    API.getUsers("")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
    
    API.getAllCards()
    .then(res => this.setState({ cards: res.data }))
    .catch(err => console.log(err));
  }

  // This is where the page display the components 
  render() {
    return (
      <React.Fragment>
      <TaskBar />
      <Modals text="Kudos! Thank you for joining the Korgi community, take a journey with us for 1 year - 52 unique experiences" />
      <div className="user-page-container">
        <div className="friends-container">
          {!this.state.friends.length ? (
            <h1 className="text-center">No friends to Display</h1>
          ) : (
            <div className="user-friends">
              <h1 className="text-center">My Friends:</h1>
              <FriendList>
                {this.state.friends.map(card => {
                  return (
                    <FriendListItem
                      key={card._id}
                      id={card._id}
                      name={card.firstName}
                      email={card.email}
                      userImage={card.userImage}
                      />
                  );
                })}
              </FriendList>
            </div>
          )}
        </div>
        <div className="user-cards-container">
          {/* Post all user cards here */}
        </div>
      </div>
      </React.Fragment>
   );
  }
}

export default UserPage;




