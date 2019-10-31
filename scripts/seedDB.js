const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/korgi-project"
);

// Use to test user information
const userSeed = [
  {
    firstName: "Austin",
    lastName: "Alber",
    password: "gamecube",
    email: "austinalber@gmail.com",
    zipCode: 32746
  },
  {
    firstName: "Tin",
    lastName: "Doan",
    password: "test",
    email: "tin.doann@gmail.com",
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
