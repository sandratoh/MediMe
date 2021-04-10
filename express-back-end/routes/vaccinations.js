const express      = require("express");
const router       = express.Router();
const { addVaccination } = require("../db/queries/queries-vaccinations")

module.exports     = (client) => {

  router.get("/", (req, res) => {

    let query = `SELECT * FROM vaccinations;`

    client
      .query(query)
      .then(data => {
        const vaccinations = data.rows;
        res.json({ vaccinations });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    user_id = 1
    addVaccination({ user_id, ...req.body })
      .then((cv) => res.json(cv))
      .catch((err) => res.json({ error: err.message }));
  });


  return router;
};
