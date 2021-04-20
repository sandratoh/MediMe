const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const {
  addUser,
  updateUser,
  getUserByEmail,
} = require("../db/queries/queries-users");

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

  // login user with bcrypt
  router.post("/login", (req, res) => {
    console.log('req body:', req.body);
    const email = req.body.email;
    const password = req.body.password;

    getUserByEmail(email)
      .then((user) => {

        bcrypt.compare(password, user.password, (err, result) => {
          console.log("this res: ", res);
          if (result) {
    //         // console.log("input password after hash", password);
    //         // console.log("user password after hash,", user.password);
    //         // console.log("res from loginUser", res);
    //         console.log("user logged in successfully");
            console.log("this user.id", user.id);
            // return user.id;
            return res.status(200).json({ id: user.id });
    //       // return res.status(200).json({ id: user.id });
          } else {
            console.log('Password does not match database');
            res.status(403).send("The email or password you entered is incorrect.");
          }
        })
      })
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
