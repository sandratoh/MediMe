const express      = require("express");
const router       = express.Router();
const { addClinicalVisit } = require("../db/queries/queries-clinics")

module.exports     = (client) => {

  router.get("/", (req, res) => {

    let query = `SELECT * FROM clinical_visits;`

    client
      .query(query)
      .then(data => {
        const clinical_visits = data.rows;
        res.json({ clinical_visits });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {

    addClinicalVisit({ ...req.body })
      .then((cv) => res.json(cv))
      .catch((err) => res.json({ error: err.message }));
  });




  return router;
};
