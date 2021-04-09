const client = require("../../elephantsql");

const getDoctorIdByName = async (name) => {
  return client
    .query(`SELECT id FROM doctors where name = $1`, [name])
    .then((res) => res.rows[0].id);
};

const getPharmacyIdByName = async (name) => {
  return client
    .query(`SELECT id FROM pharmacies where name = $1`, [name])
    .then((res) => res.rows[0].id);
};

const addMedication = async (med) => {
  const query = `
      INSERT INTO medications (name, nickname, prescribed_date, pharmacy_id, prescribed_doctor_id, refills_remaining, instructions, is_take_with_water, is_take_with_food)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
      `;

  const pharmacy_id = await getPharmacyIdByName(med.pharmacy_id);
  const prescribed_doctor_id = await getDoctorIdByName(
    med.prescribed_doctor_id
  );
  // console.log(pharmacy);
  // console.log(prescribed_doctor);

  const values = [
    med.name,
    med.nickname,
    med.prescribed_date,
    pharmacy_id,
    prescribed_doctor_id,
    med.refills_remaining,
    med.instructions,
    med.is_take_with_water,
    med.is_take_with_food,
  ];

  console.log("values", values);
  return client.query(query, values).then((res) => res.rows);
};

// Update medication

const updateMedication = async (med) => {
  const query = `
      INSERT INTO medications (name, nickname, prescribed_date, pharmacy_id, prescribed_doctor_id, refills_remaining, instructions, is_take_with_water, is_take_with_food)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
      `;

  const pharmacy_id = await getPharmacyIdByName(med.pharmacy_id);
  const prescribed_doctor_id = await getDoctorIdByName(
    med.prescribed_doctor_id
  );
  // console.log(pharmacy);
  // console.log(prescribed_doctor);

  const values = [
    med.name,
    med.nickname,
    med.prescribed_date,
    pharmacy_id,
    prescribed_doctor_id,
    med.refills_remaining,
    med.instructions,
    med.is_take_with_water,
    med.is_take_with_food,
  ];

  console.log("values", values);
  return client.query(query, values).then((res) => res.rows);
};

exports.addMedication = addMedication;
