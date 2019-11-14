import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import "./search-style.css";

class Search extends Component {
  state = {
    search: "",
    users: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    for(var i = 0; i < 5; i++) {
    API.getUsers(i)
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }}

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // If email matches search. Use that user's id to find their info.
    this.state.users.forEach(result => {
      if(this.state.search === result.email) {
        API.getUsers(result._id)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data, error: "" })
          })
          .catch(err => this.setState({ error: err.message }));
      } else {
        // No emails under that name found
      }
    });
  };

  saveFriend = event => {
    event.preventDefault();
    // Grab that specific user's info and save to current user's friend's list
  };

  render() {
    console.log(this.state.users);
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Email!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            users={this.state.users}
          />
          <SearchResults 
            results={this.state.results} 
            search={this.state.search}
            saveFriend={this.saveFriend}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
