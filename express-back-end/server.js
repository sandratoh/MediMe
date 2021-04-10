require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8000;
const express = require("express");
const bodyParser = require("body-parser");
const client = require("./elephantsql");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Seperate Routes for each Reasource
const clinicVisitsRoutes = require("./routes/clinical_visits");
const vaccinationsRoutes = require("./routes/vaccinations");
const medicationsRoutes = require("./routes/medications");
const labRecordsRoutes = require("./routes/lab_records");
const usersRoutes = require("./routes/users");

//Mount Resources
app.use("/api/clinics", clinicVisitsRoutes(client));
app.use("/api/vaccinations", vaccinationsRoutes(client));
app.use("/api/medications", medicationsRoutes(client));
app.use("/api/labs", labRecordsRoutes(client));
app.use("/api/users", usersRoutes(client));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});