import React, { Component } from "react";
// import Input from "./components/Input";
// import Button from "./components/Button";
import API from "../utils/API";
import { FriendList, FriendListItem } from "../components/FriendList";
import { Container, Row, Col } from "../components/Grid";

class UserPage extends Component {
  // state is where we initialize the start of our event 
  state = {
    friends: [],
    search: "",
    results: []
  };

  // When this component mounts, search for our friend array database with findAll()
  componentDidMount() {
    this.searchFriends("");
  }

  // SearchFriends is the search function in the component / query is the search parameter
  searchFriends = (query) => {
    API.searchUsers(query)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

 

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();

  //   //API.getRecipes grabs the info from the mongod server
  //   API.getFriends(this.state.friendSearch)
  //     .then(res => this.setState({ friends: res.data }))
  //     .catch(err => console.log(err));
  // };

  // This is where the page display the components 
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      {/* <Card
                        name="friendSearch"
                        value={this.state.friendSearch}
                        onChange={this.handleInputChange}
                        placeholder=""
                      /> */}
                    </Col>
                    <Col size="xs-3 sm-2">
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.friends.length ? (
                <h1 className="text-center">No friends to Display</h1>
              ) : (
                <FriendList>
                  {this.state.friends.map(card => {
                    return (
                      <FriendListItem
                        key={card._id}
                        id={card._id}
                        name={card.firstName}
                        email={card.email}
                        image={card.image}
                        // title={card.title}
                        // note={card.note}
                        // kodos={card.kudos}
                        // href={card.href}
                        // location={card.location}
                        // date={card.date}
                      />
                    );
                  })}
                </FriendList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
   );
  }
}

export default UserPage;


