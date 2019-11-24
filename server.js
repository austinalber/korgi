// NPM Dependencies
require("dotenv").config({ path: '.env'});
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passport = require("passport");
const cors = require('cors'); 
const path = require("path");
// Required Files
const users = require("./routes/api/users");
const cards = require("./routes/api/cards");
const Chatkit = require('@pusher/chatkit-server')
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ! chatkit
const chatkit = new Chatkit.default({
  instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR, 
  key: process.env.CHATKIT_SECRET_KEY,
});

app.post('/auth', (req, res) => {
  const authData = chatkit.authenticate({ 
    userId: req.query.user_id 
  });

  res.status(authData.status)
    .send(authData.body)
})

// Bodyparser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// chatkit config
app.post('/users', (req, res) => {
    const { userId } = req.body;

    chatkit
      .createUser({ 
     id: userId, 
     name: userId,
      })
      .then(() => {
        res.sendStatus(201);
      })
      .catch(error => {
        if (error.error_type === 'services/chatkit/user_already_exists') {
          res.sendStatus(200)
        } else {
          res.status(error.status).json(error)
        }
      });
  });

  // authenicate 

  app.post ('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({
      userId: req.query.user_id, 
    });
    res.status(authData.status).send(authData.body); 
  }); 

  //! end chatkit

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

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.use(require("cors"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up and running on PORT: ${PORT}`));
