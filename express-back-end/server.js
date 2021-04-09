require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;
const client = require("./elephantsql");

// app.get("/", function (req, res) {
  
//   res.send(client.query('SELECT * FROM users'));
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});




app.get("/", (req, res) => {
  client.query(`SELECT * FROM users;`)
    .then(data => {
      const users = data.rows;
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});