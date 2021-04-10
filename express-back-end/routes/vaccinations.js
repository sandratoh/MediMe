const express = require("express");
const router = express.Router();
const {
  addVaccination,
  addDose,
  updateDose,
} = require("../db/queries/queries-vaccinations");

module.exports = (client) => {
  // get all vaccinations
  router.get("/", (req, res) => {
    let query = `SELECT * FROM vaccinations;`;

    client
      .query(query)
      .then((data) => {
        const vaccinations = data.rows;
        res.json({ vaccinations });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // add new vaccination record
  router.post("/", (req, res) => {
    user_id = 1;
    addVaccination({ user_id, ...req.body })
      .then((cv) => res.json(cv))
      .catch((err) => res.json({ error: err.message }));
  });

  // get all doses
  router.get("/dose", (req, res) => {
    let query = `SELECT * FROM vaccination_doses`;

    client
      .query(query)
      .then((data) => {
        const doses = data.rows;
        res.status(200).json({ doses });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // get one specific vaccination record
  router.get("/:id", (req, res) => {
    let query = `SELECT * FROM vaccination_doses where id = $1;`;

    client
      .query(query, [req.params.id])
      .then((data) => {
        const doses = data.rows;
        res.status(200).json({ doses });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // get all doses associated to specific vaccination
  router.get("/:id/dose", (req, res) => {
    let query = `SELECT * FROM vaccination_doses WHERE vaccination_id = $1;`;

    client
      .query(query, [req.params.id])
      .then((data) => {
        const doses = data.rows;
        res.status(200).json({ doses });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // add new dose record
  router.post("/:id/dose", (req, res) => {
    const id = req.params.id;
    addDose({ id, ...req.body })
      .then((dose) => res.status(200).json(dose))
      .catch((err) => res.json({ error: err.message }));
  });

  // edit an existing dose record
  router.put("/:id/dose/:doseId", (req, res) => {
    const id = req.params.id;
    const doseId = req.params.doseId;
    updateDose({ id, doseId, ...req.body })
      .then((dose) => res.status(200).json(dose))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
