const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const {
  addUser,
  updateUser,
  loginUser,
  getUserByEmail,
} = require("../db/queries/queries-users");

// // checking password
// bcrypt.compareSync("password they typed", users.password);

module.exports = (client) => {
  // get all users
  router.get("/", (req, res) => {
    const query = `SELECT * FROM users;`;

    client
      .query(query)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // add new user
  router.post("/", (req, res) => {
    addUser({ ...req.body })
      .then((data) => res.json(data))
      .catch((err) => res.json({ error: err.message }));
  });

  // login
  router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    getUserByEmail(email)
      .then((user) => {
        console.log("user.id from loginUser", user.id);
        console.log("user.password from loginUser", user.password);

        if (bcrypt.compare(password, user.password)) {
          return user.id;
        } else {
          console.log("password not match");
          return "The email or password you entered is incorrect.";
        }
        // return user.id;
      })
      .then((data) => res.status(200).json({ id: data }))
      .catch((err) => res.json({ error: err.message }));
  });

  // get specific user
  router.get("/:id", (req, res) => {
    const query = `SELECT * FROM users WHERE id = $1;`;

    client
      .query(query, [req.params.id])
      .then((data) => {
        const user = data.rows;
        res.status(200).json({ user });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // update specific user
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    updateUser({ id, ...req.body })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
