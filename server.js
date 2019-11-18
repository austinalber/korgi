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
const Chatkit = require('@pusher/chatkit-server')
const app = express();
const cors = require("cors");


// chatkit

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:a4df3443-cb08-41b4-ac5f-0b9bac981b05',
  key: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a4df3443-cb08-41b4-ac5f-0b9bac981b05/token'
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

//enable cors
app.use(cors());

// chatkit config
app.post('/api/users', (req, res) => {
    const { username } = req.body
    chatkit
      .createUser({ 
     id: username, 
     name: username 
       })
      .then(() => res.sendStatus(201))
      .catch(error => {
        if (error.error_type === 'services/chatkit/user_already_exists') {
          res.sendStatus(200)
        } else {
          res.status(error.status).json(error)
        }
      })
  })

  // end chatkit

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

app.get('*', (req,res) =>{
  res.sendFile('client/build/index.html');
});

const PORT = process.env.PORT || 5000;


// app.post('/auth', (req, res) => {
//   const authData = chatkit.authenticate({
//     userId: 'your-user-id'
//   });

//   res.status(authData.status)
//      .set(authData.headers)
//      .send(authData.body);
// })

app.listen(PORT, () => console.log(`Server up and running on PORT: ${PORT}`));
