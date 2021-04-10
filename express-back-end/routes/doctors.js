const express = require("express");
const router = express.Router();

module.exports = (client) => {
  // get all doctors
  router.get("/", (req, res) => {
    let query = `SELECT * FROM doctors;`;

    client
      .query(query)
      .then((data) => {
        const doctors = data.rows;
        res.json({ doctors });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
