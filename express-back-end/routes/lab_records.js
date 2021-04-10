const express = require("express");
const router = express.Router();
const { addLab, updateLab } = require("../db/queries/queries-lab_records");

module.exports = (client) => {
  // get all lab records
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

  // add new lab record
  router.post("/", (req, res) => {
    console.log("req.body", req.body);
    // may need to update user_id later...
    const user_id = 1;

    addLab({ user_id, ...req.body })
      .then((lab) => res.status(200).json(lab))
      .catch((err) => res.json({ error: err.message }));
  });

  // get all labs
  router.get("/list", (req, res) => {
    let query = `SELECT * FROM labs;`;

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

  // get specific lab record
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

  // update specific lab record
  router.put("/:id", (req, res) => {
    // may need to update user_id later...
    const user_id = 1;
    const id = req.params.id;
    updateLab({ user_id, id, ...req.body })
      .then((lab) => res.status(200).json(lab))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
