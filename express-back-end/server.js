require("dotenv").config();

// Web server config
const express      = require("express");
const app          = express();
const bodyParser   = require("body-parser");

const PORT         = process.env.PORT || 8000;
const client       = require("./elephantsql");



app.use(bodyParser.urlencoded({ extend: true }));



//Seperate Routes for each Reasource
const clinicVisitsRoutes = require('./routes/clinics_visits');
const vaccinationsRoutes = require('./routes/vaccinations');

//Mount Reasources
app.use('/clinics', clinicVisitsRoutes(client))
app.use('/vaccinations', vaccinationsRoutes(client))



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});






//EXAMPLE

// app.get("/", (req, res) => {
//   client.query(`SELECT * FROM pharmacies;`)
//     .then(data => {
//       const users = data.rows;
//       res.json({ users });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });