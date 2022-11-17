const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

// middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://<username>:<password>@cluster0.w2fg5h5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get("/", (req, res) => {
  res.send("Welcome to Doctors Portal Server.");
});

app.listen(port, console.log(`Server is Running on port ${port}`));