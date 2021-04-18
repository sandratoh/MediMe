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
      INSERT INTO medications (name, nickname, user_id, prescribed_date, pharmacy_id, prescribed_doctor_id, refills_remaining, instructions, is_take_with_water, is_take_with_food)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
      ;`;

  const pharmacy_id = await getPharmacyIdByName(med.pharmacy_id);
  const prescribed_doctor_id = await getDoctorIdByName(
    med.prescribed_doctor_id
  );

  const values = [
    med.name,
    med.nickname,
    med.user_id,
    med.prescribed_date,
    pharmacy_id,
    prescribed_doctor_id,
    med.refills_remaining,
    med.instructions,
    med.is_take_with_water,
    med.is_take_with_food,
  ];

  return client.query(query, values).then((res) => res.rows);
};

const updateMedication = async (med) => {
  const query = `
      UPDATE medications SET name = $1, nickname = $2, user_id = $3, prescribed_date = $4, pharmacy_id = $5, prescribed_doctor_id = $6, refills_remaining = $7, instructions = $8, is_take_with_water = $9, is_take_with_food = $10
      WHERE id = $11
      RETURNING *
      ;`;

  const pharmacy_id = await getPharmacyIdByName(med.pharmacy_id);
  const prescribed_doctor_id = await getDoctorIdByName(
    med.prescribed_doctor_id
  );

  const values = [
    med.name,
    med.nickname,
    med.user_id,
    med.prescribed_date,
    pharmacy_id,
    prescribed_doctor_id,
    med.refills_remaining,
    med.instructions,
    med.is_take_with_water,
    med.is_take_with_food,
    med.id,
  ];

  return client.query(query, values).then((res) => res.rows);
};

module.exports = { addMedication, updateMedication };
