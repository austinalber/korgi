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
    zipCode: 32746,
    friendList: [
      {
        name: "Tin",
        email: "tin.doann@gmail.com"
      },
      {
        name: "Michael",
        email: "michael.pascuzzi@gmail.com"
      }
    ]
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
    zipCode: 32746,
    friendList: [
      {
        name: "Austin",
        email: "austinalber@gmail.com"
      }
    ]
  },
  {
    firstName: "Michael",
    lastName: "Pascuzzi",
    password: "test",
    email: "michael.pascuzzi@gmail.com",
    image: "https://radioimg.s3.amazonaws.com/kjkkfm/styles/alpha__380x250/s3/USATSI_11224695_168384848_lowres.jpg",
    birthDay: 25,
    birthMonth: 5,
    birthYear: 1997,
    zipCode: 32746,
    friendList: [
      {
        name: "Austin",
        email: "austinalber@gmail.com"
      }
    ]
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
