const client = require("../../elephantsql");


const addUser = async (use) => {
  const query = `
      INSERT INTO users (first_name, last_name, email, password, height_in_cm, weight_in_lb, blood_type, rh_group)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
      ;`
  
  const values = [
    use.first_name,
    use.last_name,
    use.email,
    use.password,
    use.height_in_cm,
    use.weight_in_lb,
    use.blood_type,
    use.rh_group
  ];
  return client.query(query, values).then((res) => res.rows);

};

  const updateUser = async (use) => {
    const query = `
        UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, height_in_cm = $5, weight_in_lb = $6, blood_type = $7, rh_group = $8
        WHERE id = $9
        RETURNING *;
        `;
  
    const values = [
      use.first_name,
      use.last_name,
      use.email,
      use.password,
      use.height_in_cm,
      use.weight_in_lb,
      use.blood_type,
      use.rh_group,
      use.id
    ];

  return client.query(query, values).then((res) => res.rows);

};

module.exports = { addUser, updateUser };