import React, { Component } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
// import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/FriendList";
import { Container, Row, Col } from "./components/Grid";

class userPage extends Component {

  // state is where we initialize the start of our event 
  state = {
    friends: [],
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    // var name = event.target.name; 
    // var value = event.target.value; 

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();

    //API.getRecipes grabs the info from the mongod server
    API.getFriends(this.state.friendSearch)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

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
                      <Input
                        name="friendSearch"
                        value={this.state.friendSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      />
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
                  {this.state.friends.map(circle => {
                    return (
                      <RecipeListItem
                        key={circle.id}
                        title={circle.title}
                        href={circle.href}
                        note={circle.note}
                        thumbnail={circle.thumbnail}
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

export default userPage;


