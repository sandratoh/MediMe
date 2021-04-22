const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { addUser, updateUser, getUserByEmail } = require("../db/queries/queries-users");

module.exports = (client) => {
  // Get all users
  router.get("/", (req, res) => {
    const query = `SELECT * FROM users;`;

    client
      .query(query)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  // Add new user
  router.post("/", (req, res) => {
    addUser({ ...req.body })
      .then((data) => res.json(data))
      .catch((err) => res.json({ error: err.message }));
  });

  // Login user with bcrypt
  router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    getUserByEmail(email)
      .then((user) => {
        bcrypt.compare(password, user.password, (err, result) => {
          return result
            ? res.status(200).json({ id: user.id })
            : res.status(403).send("The email or password you entered is incorrect.");
        });
      });
  });

  // Get specific user
  router.get("/:id", (req, res) => {
    const query = `SELECT * FROM users WHERE id = $1;`;

    client
      .query(query, [req.params.id])
      .then((data) => {
        const user = data.rows;
        res.status(200).json({ user });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  // Update specific user
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    updateUser({ id, ...req.body })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
