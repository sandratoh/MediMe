const client = require("../../elephantsql");
const bcrypt = require("bcryptjs");

const addUser = (user) => {
  const query = `
      INSERT INTO users (first_name, last_name, email, password, height_in_cm, weight_in_lb, blood_type, rh_group)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
      ;`;

  const inputPassword = user.password;
  console.log('inputPassword from queries-users', inputPassword);

  const hashPassword = bcrypt.hashSync(inputPassword, 10);

  console.log('hashPassword from queries-users', hashPassword);

  const values = [
    user.first_name,
    user.last_name,
    user.email,
    hashPassword,
    user.height_in_cm,
    user.weight_in_lb,
    user.blood_type,
    user.rh_group,
  ];
  return client.query(query, values).then((res) => res.rows);
};

const updateUser = async(user) => {
  const query = `
      UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, height_in_cm = $5, weight_in_lb = $6, blood_type = $7, rh_group = $8
      WHERE id = $9
      RETURNING *
      ;`;

  const values = [
    user.first_name,
    user.last_name,
    user.email,
    user.password,
    user.height_in_cm,
    user.weight_in_lb,
    user.blood_type,
    user.rh_group,
    user.id,
  ];

  return client.query(query, values).then((res) => res.rows);
};

const getUserByEmail = async (email) => {
  const query = `
    SELECT *
    FROM users
    WHERE email LIKE $1;
  `;

  return client.query(query, [email]).then((res) => {
    return res.rows[0];
  });
};

module.exports = { addUser, updateUser, getUserByEmail };
