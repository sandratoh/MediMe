const express = require("express");
const router = express.Router();

module.exports = (client) => {
  // get all doctors
  router.get("/", (req, res) => {
    let query = `SELECT * FROM pharmacies;`;

    client
      .query(query)
      .then((data) => {
        const pharmacies = data.rows;
        res.json({ pharmacies });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
