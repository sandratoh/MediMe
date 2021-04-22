const express = require("express");
const router = express.Router();

module.exports = (client) => {
  // Get all doctors
  router.get("/", (req, res) => {
    const query = `SELECT * FROM doctors;`;

    client
      .query(query)
      .then((data) => {
        const doctors = data.rows;
        res.json({ doctors });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  // Add new doctor
  router.post("/", (req, res) => {
    const query = `
      INSERT INTO doctors (name)
      VALUES ($1)
      RETURNING *
      ;`;

    client
      .query(query, [req.body.name])
      .then((data) => {
        const doctor = data.rows;
        res.status(200).json({doctor});
      })
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
