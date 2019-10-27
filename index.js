// NPM Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express Application
const app = express();

// Connect To Mongoose DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/korgi-project`);

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});