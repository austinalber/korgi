import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  // Search for all users
  getUsers: function(user) {
    return axios.get("/api/users/user", user);
  },
  // Search for all users
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Save user on signup
  saveUser: function(userData) {
    return axios.post("/api/users", userData)
  },
  // Save friend for user
  saveFriend: function(id, friendData) {
    return axios.post("/api/users/" + id, friendData);
  },
  // Get all cards
  getAllCards: function() {
    return axios.get("/api/cards/card")
  },
  // Get a specific card(s)
  getCards: function(id) {
    return axios.get("/api/cards/" + id);
  },
  // Post a card
  postCard: function(cardData) {
    return axios.post("/api/cards/", cardData);
  }
};


