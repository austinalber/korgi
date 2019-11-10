// NPM Dependencies
require("dotenv").config();
const express = require('express');
const path = require("path");
const GridFsStorage = require('multer-gridfs-storage');
const bodyParser = require('body-parser');
const Grid = require("gridfs-stream");
const crypto = require("crypto");
const cors = require("cors");
const multer = require("multer");
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
app.use(cors()); // multer

// multer configuration
// app.use(express.static(path.join(__direname, '..', 'public')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
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

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Connect to DB - Multer
const mongoURI = "mongodb+srv://Tin:Huong1225@uploader-rutws.mongodb.net/test?retryWrites=true&w=majority";

const conn = mongoose.createConnection(mongoURI)
conn.once('open', () => {
  console.log('Connection Successful')
});

// multer
let gfs

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo)
  gfs.collection('uploads')
  console.log('Connection Successful')
})

// Create storage engine multer
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = file.originalname
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        }
        resolve(fileInfo)
      })
    })
  },
});

const upload = multer({ storage })

// multer - routes for the image to post to 

app.post('/', upload.single('img'), (req, res, err) => {
  if (err) throw err
  res.status(201).send()
})

// multer 

app.get('/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists',
      })
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename)
      readstream.pipe(res)
    } else {
      res.status(404).json({
        err: 'Not an image',
      })
    }
  })
})

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});

