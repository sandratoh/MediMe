const client = require("../../elephantsql");
const bcrypt = require("bcryptjs");

const addUser = async (user) => {
  const query = `
      INSERT INTO users (first_name, last_name, email, password, height_in_cm, weight_in_lb, blood_type, rh_group)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
      ;`;

  const inputPassword = user.password;

  const hashPassword = bcrypt.hash(inputPassword, 10);

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

const updateUser = async (user) => {
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

  // console.log("getUserbyEmail before query, after defining query");
  // console.log("email param in getUserByEmail:", email);
  // console.log("query in getUserByEmail:", query);

  return client.query(query, [email]).then((res) => {
    // console.log("getuserbyemail res", res);
    return res.rows[0];
  });
};

// const loginUser = (email, password) => {
//   console.log("before getUserByEmail function");
//   // console.log("email from loginUser: ", email);
//   // console.log("password from loginuser: ", password);
//   getUserByEmail(email).then((user) => {
//     console.log("input password:", password);
//     console.log("user password:", user.password);

//     bcrypt.compare(password, user.password, (err, res) => {
//       console.log("input password after hash", password);
//       console.log("user password after hash,", user.password);
//       console.log("res from loginUser", res);

//       console.log("err before if/else", err);
//       console.log("res before if/else", res);
//       if (res) {
//         console.log("user logged in successfully");
//         console.log("user.id from loginUser", user.id);
//         return user.id;
//         // return res.status(200).json({ id: user.id });
//         // } else {
//         //   console.log("password not match");
//         //   return "The email or password you entered is incorrect.";
//         // return res
//         //   .status(403)
//         //   .json({ error: "The email or password you entered is incorrect." });
//       } else {
//         console.log("did not log in");
//       }
//     });
//     return;
//   });
// };

module.exports = { addUser, updateUser, getUserByEmail };
