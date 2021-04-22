const express = require("express");
const router = express.Router();
const { addLab, updateLab, addNewLab } = require("../db/queries/queries-lab_records");

module.exports = (client) => {
  // Get all lab records
  router.get("/", (req, res) => {
    const query = `SELECT * FROM lab_records ORDER BY date DESC;`;

    client
      .query(query)
      .then((data) => {
        const lab_records = data.rows;
        res.json({ lab_records });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  // Add new lab record
  router.post("/", (req, res) => {
    const user_id = 1;

    addLab({ user_id, ...req.body })
      .then((lab) => res.status(200).json(lab))
      .catch((err) => res.json({ error: err.message }));
  });

  // Get all labs
  router.get("/list", (req, res) => {
    const query = `SELECT * FROM labs;`;

    client
      .query(query)
      .then((data) => {
        const labs = data.rows;
        res.json({ labs });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  // Add new lab
  router.post("/list", (req, res) => {
    addNewLab(req.body.name)
      .then((data) => res.status(200).json({data}))
      .catch((err) => res.json({ error: err.message }));
  });

  // Get specific lab record
  router.get("/:id", (req, res) => {
    const query = `SELECT * FROM lab_records where id = $1;`;

    client
      .query(query, [req.params.id])
      .then((data) => {
        const labs = data.rows;
        res.status(200).json({ labs });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  // Update specific lab record
  router.put("/:id", (req, res) => {
    const user_id = 1;
    const id = req.params.id;

    updateLab({ user_id, id, ...req.body })
      .then((lab) => res.status(200).json(lab))
      .catch((err) => res.json({ error: err.message }));
  });

  // Delete specific lab record
  router.delete("/:id", (req, res) => {
    const query = `DELETE FROM lab_records WHERE id = $1`;

    client
      .query(query, [req.params.id])
      .then(res.status(200).json({ status: "succcessfully deleted" }))
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  return router;
};
