// NPM Dependencies
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require("path");
// Required Files
const users = require("./routes/api/users");
const cards = require("./routes/api/cards");

const app = express();

// Bodyparser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/cards", cards);

// CORS
app.use(require("cors"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

app.get('*', (req,res) =>{
  res.sendFile('client/build/index.html');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up and running on PORT: ${PORT}`));
