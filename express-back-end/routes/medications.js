const express = require("express");
const router = express.Router();
const { addMedication, updateMedication } = require("../db/queries/queries-medications");

module.exports = (client) => {
  // Get all medications
  router.get("/", (req, res) => {
    const query = `SELECT * FROM medications ORDER BY prescribed_date DESC;`;

    client
      .query(query)
      .then((data) => {
        const medications = data.rows;
        res.status(200).json({ medications });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  // Add new medication
  router.post("/", (req, res) => {
    const user_id = 1;

    addMedication({ user_id, ...req.body })
      .then((med) => res.status(200).json(med))
      .catch((err) => res.json({ error: err.message }));
  });

  // Get specific medication
  router.get("/:id", (req, res) => {
    const query = `SELECT * FROM medications where id = $1;`;

    client
      .query(query, [req.params.id])
      .then((data) => {
        const medication = data.rows;
        res.status(200).json({ medication });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  // Update specific medication
  router.put("/:id", (req, res) => {
    const user_id = 1;
    const id = req.params.id;

    updateMedication({ user_id, id, ...req.body })
      .then((med) => res.status(200).json(med))
      .catch((err) => res.json({ error: err.message }));
  });

  // Delete specific medication
  router.delete("/:id", (req, res) => {
    const query = `DELETE FROM medications WHERE id = $1`;

    client
      .query(query, [req.params.id])
      .then(res.status(200).json({ status: "succcessfully deleted" }))
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  return router;
};
