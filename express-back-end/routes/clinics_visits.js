const express      = require("express");
const router       = express.Router();

module.exports = (client) => {

  router.get("/", (req, res) => {

    client.query(`SELECT * FROM clinics_visits;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
