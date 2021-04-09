require("dotenv").config();

// Web server config
const express      = require("express");
const app          = express();
const bodyParser   = require("body-parser");

const PORT         = process.env.PORT || 8000;
const client       = require("./elephantsql");



app.use(bodyParser.urlencoded({ extend: true }));



//Seperate Routes for each Reasource
const clinicVisitsRoutes = require('./routes/clinical_visits');
const vaccinationsRoutes = require('./routes/vaccinations');
const medicationsRoutes = require('./routes/medications');
const labRecordsRoutes = require('./routes/lab_records');

//Mount Reasources
app.use('/api/clinics', clinicVisitsRoutes(client))
app.use('/api/vaccinations', vaccinationsRoutes(client))
app.use('/api/medications', medicationsRoutes(client))
app.use('/api/labs', labRecordsRoutes(client))



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