require("dotenv").config();

const pg = require("pg");

const conString = process.env.POSTGRES_URL ||
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
const client = new pg.Client(conString);

client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  // client.query('SELECT NOW() AS "theTime"', function (err, result) {
  //   if (err) {
  //     return console.error("error running query", err);
  //   }
  console.log("Connected to database");
  // client.end();
});

module.exports = client;
