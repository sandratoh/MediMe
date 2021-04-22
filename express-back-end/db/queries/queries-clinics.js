const client = require("../../elephantsql");

const getDoctorIdByName = async (name) => {
  return client
    .query(`SELECT id FROM doctors where name = $1;`, [name])
    .then((res) => res.rows[0].id);
};

const getClinicIdByName = async (name) => {
  return client
    .query(`SELECT id FROM clinics where name = $1;`, [name])
    .then((res) => res.rows[0].id);
};

const addClinicalVisit = async (cv) => {
  const query = `
      INSERT INTO clinical_visits (user_id, clinic_id, doctor_id, date, type_of_visit, reason_for_visit, doctor_diagnosis)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
      ;`;

  const doctor_id = await getDoctorIdByName(cv.doctor_id);
  const clinic_id = await getClinicIdByName(cv.clinic_id);
  const values = [
    cv.user_id,
    clinic_id,
    doctor_id,
    cv.date,
    cv.type_of_visit,
    cv.reason_for_visit,
    cv.doctor_diagnosis,
  ];
  return client.query(query, values).then((res) => res.rows);
};

const updateClinicalVisit = async (cv) => {
  const query = `
        UPDATE clinical_visits SET user_id = $1, clinic_id = $2, doctor_id = $3, date = $4, type_of_visit = $5, reason_for_visit = $6, doctor_diagnosis = $7
        WHERE id = $8
        RETURNING *
        ;`;

  const doctor_id = await getDoctorIdByName(cv.doctor_id);
  const clinic_id = await getClinicIdByName(cv.clinic_id);
  const values = [
    cv.user_id,
    clinic_id,
    doctor_id,
    cv.date,
    cv.type_of_visit,
    cv.reason_for_visit,
    cv.doctor_diagnosis,
    cv.id,
  ];

  return client.query(query, values).then((res) => res.rows);
};

const addNewClinic = (name) => {
  const query = `
    INSERT INTO clinics (name)
    VALUES ($1)
    RETURNING *
    ;`;

  return client
    .query(query, [name])
    .then((res) => res.rows);
};

module.exports = { addClinicalVisit, updateClinicalVisit, addNewClinic };
