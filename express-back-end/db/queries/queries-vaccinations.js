const client = require("../../elephantsql");

const addVaccination = async (vac) => {
  const query = `
      INSERT INTO vaccinations (user_id, name, total_num_doses)
      VALUES ($1, $2, $3)
      RETURNING *
      ;`;

  const values = [vac.user_id, vac.name, vac.total_num_doses];
  return client.query(query, values).then((res) => res.rows);
};

const addDose = async (dose) => {
  const query = `
      INSERT INTO vaccination_doses (vaccination_id, serial_number, date_taken, administration_site, next_scheduled_dose)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
      `;

  const values = [
    dose.id,
    dose.serial_number,
    dose.date_taken,
    dose.administration_site,
    dose.next_scheduled_dose,
  ];

  // console.log("values", values);
  return client.query(query, values).then((res) => res.rows);
};

const updateDose = async (dose) => {
  const query = `
      UPDATE vaccination_doses SET vaccination_id = $1, serial_number = $2, date_taken = $3, administration_site = $4, next_scheduled_dose = $5
      WHERE id = $6
      RETURNING *;
      `;

  const values = [
    dose.id,
    dose.serial_number,
    dose.date_taken,
    dose.administration_site,
    dose.next_scheduled_dose,
    dose.doseId,
  ];

  // console.log("values", values);
  return client.query(query, values).then((res) => res.rows);
};

module.exports = { addVaccination, addDose, updateDose };
