const client = require("../../elephantsql");

const getDoctorIdByName = async (name) => {
  return client
    .query(`SELECT id FROM doctors where name = $1;`, [name])
    .then((res) => res.rows[0].id);
};

const getLabIdByName = async (name) => {
  return client
    .query(`SELECT id FROM labs where name = $1;`, [name])
    .then((res) => res.rows[0].id);
};

const addLab = async (lab) => {
  const query = `
      INSERT INTO lab_records (user_id, date, referral_doctor_id, lab_id, type_of_test)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      ;`;

  const referral_doctor_id = await getDoctorIdByName(lab.referral_doctor_id);
  const lab_id = await getLabIdByName(lab.lab_id);

  const values = [
    lab.user_id,
    lab.date,
    referral_doctor_id,
    lab_id,
    lab.type_of_test,
  ];

  return client.query(query, values).then((res) => res.rows);
};

const updateLab = async (lab) => {
  const query = `
      UPDATE lab_records SET user_id = $1, date = $2, referral_doctor_id = $3, lab_id = $4, type_of_test = $5
      WHERE id = $6
      RETURNING *
      ;`;

  const referral_doctor_id = await getDoctorIdByName(lab.referral_doctor_id);
  const lab_id = await getLabIdByName(lab.lab_id);

  const values = [
    lab.user_id,
    lab.date,
    referral_doctor_id,
    lab_id,
    lab.type_of_test,
    lab.id,
  ];

  return client.query(query, values).then((res) => res.rows);
};

const addNewLab = (name) => {
  const query = `
    INSERT INTO labs (name)
    VALUES ($1)
    RETURNING *
    ;`;

  return client
    .query(query, [name])
    .then((res) => res.rows);
};

module.exports = { addLab, updateLab, addNewLab };
