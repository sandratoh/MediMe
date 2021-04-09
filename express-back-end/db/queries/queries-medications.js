const client = require("../../elephantsql");

const addMedication = (med) => {
  const query = `
      INSERT INTO medications (name, nickname, prescribed_date, pharmacy_id, prescribed_doctor_id, refills_remaining, instructions, is_take_with_water, is_take_with_food)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
      `;

  const values = [
    med.name,
    med.nickname,
    med.prescribed_date,
    med.pharmacy_id,
    med.prescribed_doctor_id,
    med.refills_remaining,
    med.instructions,
    med.is_take_with_water,
    med.is_take_with_food,
  ];

  console.log("values", values);
  return client.query(query, values).then((res) => res.rows);
};
exports.addMedication = addMedication;

// const getDoctorIdByName = (name) => {
//   return client
//     .query(`SELECT id FROM doctors where name = $1`, [name])
//     .then((res) => res.rows[0]);
// };
// exports.getDoctorIdByName = getDoctorIdByName

// const getPharmacyIdByName = (name) => {
//   return client
//     .query(`SELECT id FROM pharmacies where name = $1`, [name])
//     .then((res) => res.rows[0]);
// };
// exports.getPharmacyIdByName = getPharamacyIdByName
