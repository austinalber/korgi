const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/korgi-project"
);

// Use to test user information
const userSeed = [
  {
    firstName: "Austin",
    lastName: "Alber",
    password: "gamecube",
    email: "austinalber@gmail.com",
    image: "https://pbs.twimg.com/profile_images/748686391295418368/q_Juy4FH_400x400.jpg",
    birthDay: 25,
    birthMonth: 5,
    birthYear: 1997,
    zipCode: 32746
  },
  {
    firstName: "Tin",
    lastName: "Doan",
    password: "test",
    email: "tin.doann@gmail.com",
    image: "https://images-na.ssl-images-amazon.com/images/I/61Syo19tVWL._SL1280_.jpg",
    birthDay: 25,
    birthMonth: 5,
    birthYear: 1997,
    zipCode: 32746
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
