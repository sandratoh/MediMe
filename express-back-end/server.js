require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;
const client = require("./elephantsql");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
