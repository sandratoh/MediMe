DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  height_in_cm INT,
  weight_in_lb INT,
  blood_type VARCHAR(10) CHECK (blood_type IN ('A', 'B', 'AB', 'O', 'UNKNOWN')),
  rh_group VARCHAR(10) CHECK (rh_group IN ('POSITIVE', 'NEGATIVE', 'UNKNOWN'))
 );