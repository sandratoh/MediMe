const client = require("../../elephantsql");


const addVaccination = async (vac) => {
  const query = `
      INSERT INTO vaccinations (user_id, name, total_num_doses)
      VALUES ($1, $2, $3)
      RETURNING *
      ;`
  
  const values = [
    vac.user_id,
    vac.name,
    vac.total_num_doses
  ];
  return client.query(query, values).then((res) => res.rows);

};


module.exports = { addVaccination };