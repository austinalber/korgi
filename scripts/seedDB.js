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
    image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiEuYfzy8flAhVDnlkKHXA5BOMQjRx6BAgBEAQ&url=https%3A%2F%2Ftwitter.com%2Falberaustin&psig=AOvVaw1aIRQOGZoOypDpApLQf94j&ust=1572648914250658",
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
    image: "",
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
