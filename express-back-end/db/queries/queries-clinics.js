const client = require("../../elephantsql");

const addClinicalVisit = (cv) => {
  const query = `
      INSERT INTO clinical_visits (user_id, clinic_id, referral_doctor_id, date, type_of_visit, reason_for_visit, doctor_diagnosis)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
      ;`
  
  const values = [
    cv.user_id,
    cv.clinic_id,
    cv.referral_doctor_id,
    cv.date,
    cv.type_of_visit,
    cv.reason_for_visit,
    cv.doctor_diagnosis
  ];

  return client.query(query, values).then((res) => res.rows);

};

exports.addClinicalVisit = addClinicalVisit