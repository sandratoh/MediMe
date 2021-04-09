const express = require("express");
const router = express.Router();
const { addLab } = require("../db/queries/queries-lab_records");

module.exports = (client) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM lab_records;`;

    client
      .query(query)
      .then((data) => {
        const labs = data.rows;
        res.json({ labs });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    console.log("req.body", req.body);
    // may need to update user_id later...
    const user_id = 1;

    addLab({ user_id, ...req.body })
      .then((lab) => res.status(200).json(lab))
      .catch((err) => res.json({ error: err.message }));
  });

  router.get("/:id", (req, res) => {
    let query = `SELECT * FROM lab_records where id = $1;`;

    client
      .query(query, [req.params.id])
      .then((data) => {
        const labs = data.rows;
        res.status(200).json({ labs });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
