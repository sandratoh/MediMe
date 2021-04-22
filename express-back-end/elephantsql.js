require("dotenv").config();

const pg = require("pg");

const conString = process.env.POSTGRES_URL ||
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;

const client = new pg.Client(conString);

client.connect((err) => {
  return err
    ? console.error("could not connect to postgres", err)
    : console.log("Connected to database");
});

module.exports = client;
