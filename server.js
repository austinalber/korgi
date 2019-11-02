// Require data from config
require("dotenv").config();

// Require express for application
const express = require('express');

// NPM Dependencies
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require("passport");

// Declare routes
const routes = require("./routes");
const router = express.Router()

// Declare database
// const db = require("./models");

// Create Express Application with PORT
const app = express();
const PORT = process.env.PORT || 5000;

// Connect To Mongoose DB
const mongoRoute = process.env.MONGODB_URI || `mongodb://localhost/korgi-project`
mongoose.Promise = global.Promise;
mongoose.connect(mongoRoute);

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Passport config
// require("./config/passport/passport")(passport, db.user);

// Add routes, both API and view
app.use(routes);

// Get data
router.get('/users', (req, res) => {
  User.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});