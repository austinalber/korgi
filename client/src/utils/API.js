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
  getUsers: function() {
    return axios.get("http://localhost:5000/api/users");
  },
  // Search for all users
  getUser: function(id) {
    return axios.get("http://localhost:5000/api/users/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData)
  }
};


