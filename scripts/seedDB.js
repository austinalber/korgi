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
    userImage: "https://pbs.twimg.com/profile_images/748686391295418368/q_Juy4FH_400x400.jpg",
    dateOfBirth: "05/25/1997",
    zipcode: 32746,
    friendList: [
      {
        friendId: "5dbdbc1048b9e958c1efbee4"
      },
      {
        friendId: "5dbdbc1048b9e958c1efbee5"
      }
    ]
  },
  {
    firstName: "Tin",
    lastName: "Doan",
    password: "test",
    email: "tin.doann@gmail.com",
    userImage: "https://images-na.ssl-images-amazon.com/images/I/61Syo19tVWL._SL1280_.jpg",
    dateOfBirth: "05/25/1997",
    zipcode: 32746,
    friendList: [
      {
        friendId: "5dbdbc1048b9e958c1efbee3"
      }
    ]
  },
  {
    firstName: "Michael",
    lastName: "Pascuzzi",
    password: "test",
    email: "michael.pascuzzi@gmail.com",
    userImage: "https://radioimg.s3.amazonaws.com/kjkkfm/styles/alpha__380x250/s3/USATSI_11224695_168384848_lowres.jpg",
    dateOfBirth: "05/25/1997",
    zipcode: 32746,
    friendList: [
      {
        friendId: "5dbdbc1048b9e958c1efbee3"
      }
    ]
  }
];

const cardSeed = [
  {
    userId: "5dbdbc1048b9e958c1efbee3",
    userImage: "https://pbs.twimg.com/profile_images/748686391295418368/q_Juy4FH_400x400.jpg",
    postImage: "https://radioimg.s3.amazonaws.com/kjkkfm/styles/alpha__380x250/s3/USATSI_11224695_168384848_lowres.jpg",
    caption: "I created this card on November 7th, 2019 as a test to our card system! :)",
    likes: 2,
    hasBeenLiked: true,
    location: "Lake Mary, Florida"
  }
]

// Add userSeed to User collection
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

// Add cardSeed to Card collection
db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
