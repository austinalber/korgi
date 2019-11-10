const MongoClient = require('mongodb').MongoClient;
const mongoURI = "mongodb+srv://Tin:Huong1225@uploader-rutws.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 
