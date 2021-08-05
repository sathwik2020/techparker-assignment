const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const { Templates } = require("./models/template");

// Serve static files
app.use("*/images", express.static("assets/images"));
app.use(bodyParser.json());
app.use(cors());

let templates = new Templates();

// Get all the templates
app.get("/", (req, res) => {
  templates.getTemplates((err, data) => {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      res.json(data);
      res.status(200).end();
    }
  });
});

app.listen(process.env.PORT || 3003, () => {
  console.log("Listening on port 3003!!!!!!!!");
});
