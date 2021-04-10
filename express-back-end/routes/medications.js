const express = require("express");
const router = express.Router();
const {
  addMedication,
  updateMedication,
} = require("../db/queries/queries-medications");

module.exports = (client) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM medications`;

    client
      .query(query)
      .then((data) => {
        const medication = data.rows;
        res.status(200).json({ medication });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    console.log("req.body", req.body);
    // may need to update user_id later...
    const user_id = 1;

    addMedication({ user_id, ...req.body })
      .then((med) => res.status(200).json(med))
      .catch((err) => res.json({ error: err.message }));
  });

  router.get("/:id", (req, res) => {
    let query = `SELECT * FROM medications where id = $1;`;

    client
      .query(query, [req.params.id])
      .then((data) => {
        const medication = data.rows;
        res.status(200).json({ medication });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/:id", (req, res) => {
    // may need to update user_id later...
    const user_id = 1;
    const id = req.params.id;

    updateMedication({ user_id, id, ...req.body })
      .then((med) => res.status(200).json(med))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
