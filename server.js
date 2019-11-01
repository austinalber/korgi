// Require express for application
const express = require('express');

// NPM Dependencies
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes");
const PORT = process.env.PORT || 5000;

// Create Express Application
const app = express();

// Connect To Mongoose DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/korgi-project`);

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Add routes, both API and view
app.use(routes);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});