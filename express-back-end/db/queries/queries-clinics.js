const client = require("../../elephantsql");

const getDoctorIdByName = async (name) => {
  return client
    .query(`SELECT id FROM doctors where name = $1`, [name])
    .then((res) => res.rows[0].id);
};

const getClinicIdByName = async (name) => {
  return client
    .query(`SELECT id FROM clinics where name = $1`, [name])
    .then((res) => res.rows[0].id);
};

const addClinicalVisit = async (cv) => {
  const query = `
      INSERT INTO clinical_visits (user_id, clinic_id, referral_doctor_id, date, type_of_visit, reason_for_visit, doctor_diagnosis)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
      ;`
  
  const referral_doctor_id = await getDoctorIdByName(cv.referral_doctor_id)
  const clinic_id = await getClinicIdByName(cv.clinic_id)
  const values = [
    cv.user_id,
    clinic_id,
    referral_doctor_id,
    cv.date,
    cv.type_of_visit,
    cv.reason_for_visit,
    cv.doctor_diagnosis
  ];

  return client.query(query, values).then((res) => res.rows);

};

exports.addClinicalVisit = addClinicalVisit