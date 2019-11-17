// NPM Dependencies
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passport = require("passport");
// Required Files
const users = require("./routes/api/users");
const cards = require("./routes/api/cards");
const chatkitServer = require('../target/src/index');
const app = express();

// chatkit

const chatkit = new chatkitServer.default({
  instanceLocator: 'v1:us1:a4df3443-cb08-41b4-ac5f-0b9bac981b05',
  key: '6c7b4fec-f9a4-4a84-8a19-77a14a1190ae:Y7rHBwrwn8oCCYrKCWN7CGofqeCgT1Z5yklFkUPlBXM='
});

// Bodyparser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


// chatkit 
app.post('/users', (req, res) => {
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
  
  app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({ userId: req.query.user_id })
    res.status(authData.status).send(authData.body)
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
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


// // NPM Dependencies
// require("dotenv").config();
// const express = require('express');
// const path = require("path");
// const GridFsStorage = require('multer-gridfs-storage');
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser');
// const Grid = require("gridfs-stream");
// const crypto = require("crypto");
// const cors = require("cors");
// const multer = require("multer");
// const passport = require("passport");
// // const register = require("./routes/api/register");



// // Declare routes
// const routes = require("./routes");
// const router = express.Router()

// // Declare database
// // const db = require("./models");

// // Create Express Application with PORT
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect To Mongoose DB
// const mongoRoute = process.env.MONGODB_URI || `mongodb://austinalber:Gamecube1:localhost/korgi-project`
// mongoose.Promise = global.Promise;
// mongoose.connect(mongoRoute);

// let db = mongoose.connection;

// db.once('open', () => console.log('connected to the database'));

// // checks if connection with the database is successful
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.use(bodyParser.json());
// app.use(cors()); // multer
// app.use(passport.initialize());
// require("./config/passport/passport")(passport);

// // multer configuration
// // app.use(express.static(path.join(__direname, '..', 'public')))

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

// // Passport config
// // require("./config/passport/passport")(passport, db.user);

// // Add routes, both API and view
// app.use(routes);

// // Get data
// router.get('/users', (req, res) => {
//   User.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// });

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// //Connect to DB - Multer
// const mongoURI = "mongodb+srv://Tin:Huong1225@uploader-rutws.mongodb.net/test?retryWrites=true&w=majority";

// const conn = mongoose.createConnection(mongoURI)
// conn.once('open', () => {
//   console.log('Connection Successful')
// });

// // multer
// let gfs

// conn.once('open', () => {
//   gfs = Grid(conn.db, mongoose.mongo)
//   gfs.collection('uploads')
//   console.log('Connection Successful')
// })

// // Create storage engine multer
// const storage = new GridFsStorage({
//   url: mongoURI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err)
//         }
//         const filename = file.originalname
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads',
//         }
//         resolve(fileInfo)
//       })
//     })
//   },
// });

// const upload = multer({ storage })

// // multer - routes for the image to post to 

// app.post('/', upload.single('img'), (req, res, err) => {
//   if (err) throw err
//   res.status(201).send()
// })

// // multer 

// app.get('/:filename', (req, res) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     // Check if file
//     if (!file || file.length === 0) {
//       return res.status(404).json({
//         err: 'No file exists',
//       })
//     }

//     // Check if image
//     if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//       // Read output to browser
//       const readstream = gfs.createReadStream(file.filename)
//       readstream.pipe(res)
//     } else {
//       res.status(404).json({
//         err: 'Not an image',
//       })
//     }
//   })
// })

// app.listen(PORT, () => {
//   console.log(`app running on port ${PORT}`)
// });

