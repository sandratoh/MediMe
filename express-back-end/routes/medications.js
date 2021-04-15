const express = require("express");
const router = express.Router();
const {
  addMedication,
  updateMedication,
} = require("../db/queries/queries-medications");

module.exports = (client) => {
  // get all medications
  router.get("/", (req, res) => {
    let query = `SELECT * FROM medications ORDER BY prescribed_date DESC;`;

    client
      .query(query)
      .then((data) => {
        const medications = data.rows;
        res.status(200).json({ medications });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // add new medication
  router.post("/", (req, res) => {
    console.log("req.body", req.body);
    // may need to update user_id later...
    const user_id = 1;

    addMedication({ user_id, ...req.body })
      .then((med) => res.status(200).json(med))
      .catch((err) => res.json({ error: err.message }));
  });

  // get specific medication
  router.get("/:id", (req, res) => {
    let query = `SELECT * FROM medications where id = $1;`;

    client
      .query(query, [req.params.id])
      .then((data) => {
        const medication = data.rows;
        res.status(200).json({ medication });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // update specific medication
  router.put("/:id", (req, res) => {
    // may need to update user_id later...
    const user_id = 1;
    const id = req.params.id;

    updateMedication({ user_id, id, ...req.body })
      .then((med) => res.status(200).json(med))
      .catch((err) => res.json({ error: err.message }));
  });

  // delete specific medication
  router.delete("/:id", (req, res) => {
    let query = `DELETE FROM medications WHERE id = $1`;

    client
      .query(query, [req.params.id])
      .then(res.status(200).json({ status: "succcessfully deleted" }))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
