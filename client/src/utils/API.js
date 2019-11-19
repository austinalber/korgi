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
    return axios.get("/api/users/user");
  },
  // Search for all users
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Search for all users
  getUserMlab: function() {
    return axios.get("https://v1.api.mlab.com/api/1/databases/heroku_v3sdsmd9/collections/users/6753013084211642000?apiKey=SS6I-2hyw8lj-V-uRugby71j1kfzs83I");
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
    return axios.get("/api/card")
  },
  // Get a specific card(s)
  getCards: function(id) {
    return axios.get("/api/card/" + id);
  },
  // Post a card
  postCard: function(cardData) {
    return axios.post("/api/cards/", cardData);
  }
};


// import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };