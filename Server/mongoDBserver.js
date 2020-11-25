const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/savedRedditDataDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB server");
});

const savedDataSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  id: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
});

app.post("/add", (request, response) => {
  console.log(request.body);
  const SavedData = mongoose.model("SavedData", savedDataSchema);
  const savedData = new SavedData({
    title: request.body.title,
    id: request.body.id,
  });

  SavedData.find({ id: request.body.id }, (err, docs) => {
    if (docs.length) {
      console.log("id already exists");
    } else {
      savedData.save();
    }
  });
  response.send(request.body);
});

app.listen(1234, () => {
  console.log("Server is running on port 1234.");
});
