const express      = require("express");
const router       = express.Router();
// const { addClinicalVisit, updateClinicalVisit } = require("../db/queries/queries-clinics")

module.exports     = (client) => {

  router.get("/", (req, res) => {

    let query = `SELECT * FROM users;`

    client
      .query(query)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  // router.post("/", (req, res) => {

  //   addClinicalVisit({ ...req.body })
  //     .then((cv) => res.json(cv))
  //     .catch((err) => res.json({ error: err.message }));
  // });


  // router.get("/:id", (req, res) => {
    
  //     let query = `SELECT * FROM clinical_visits WHERE id = $1;`;

  //     client
  //       .query(query, [req.params.id])
  //       .then((data) => {
  //         const clinical_visit = data.rows;
  //         res.status(200).json({ clinical_visit })
  //       })
  //       .catch((err) => {
  //         res.status(500).json({ error: err.message });
  //       });
  // })


  // router.put("/:id", (req, res) => {
  //   const id = req.params.id;
  //   updateClinicalVisit({ id, ...req.body })
  //     .then((med) => res.status(200).json(med))
  //     .catch((err) => res.json({ error: err.message }));
  // });

  return router;
};