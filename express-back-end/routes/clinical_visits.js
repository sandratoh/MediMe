const express = require("express");
const router = express.Router();
const {
  addClinicalVisit,
  updateClinicalVisit,
  addNewClinic
} = require("../db/queries/queries-clinics");

module.exports = (client) => {
  // get all clinical visit records
  router.get("/", (req, res) => {
    let query = `SELECT * FROM clinical_visits ORDER BY date DESC;`;

    client
      .query(query)
      .then((data) => {
        const clinical_visits = data.rows;
        res.json({ clinical_visits });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // add new clinical visit record
  router.post("/", (req, res) => {
    const user_id = 1;
    addClinicalVisit({ user_id, ...req.body })
      .then((cv) => res.json(cv))
      .catch((err) => res.json({ error: err.message }));
  });

  // get all clinics
  router.get("/list", (req, res) => {
    let query = `SELECT * FROM clinics;`;

    client
      .query(query)
      .then((data) => {
        const clinics = data.rows;
        res.json({ clinics });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // add new clinic
  router.post("/list", (req, res) => {

    addNewClinic(req.body.name)
      .then((data) => res.status(200).json({data}))
      .catch((err) => res.json({ error: err.message }));
  });

  // get specific clinical record
  router.get("/:id", (req, res) => {
    let query = `SELECT * FROM clinical_visits WHERE id = $1;`;

    client
      .query(query, [req.params.id])
      .then((data) => {
        const clinical_visit = data.rows;
        res.status(200).json({ clinical_visit });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // update specific clinical record
  router.put("/:id", (req, res) => {
    const user_id = 1;
    const id = req.params.id;
    updateClinicalVisit({ user_id, id, ...req.body })
      .then((med) => res.status(200).json(med))
      .catch((err) => res.json({ error: err.message }));
  });

  // delete specific clinical record
  router.delete("/:id", (req, res) => {
    let query = `DELETE FROM clinical_visits WHERE id = $1`;

    client
      .query(query, [req.params.id])
      .then(res.status(200).json({ status: "succcessfully deleted" }))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
