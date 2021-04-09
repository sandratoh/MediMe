DROP TABLE IF EXISTS medications CASCADE;
CREATE TABLE medications (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  nickname VARCHAR(255),
  prescribed_date DATE DEFAULT CURRENT_DATE,
  pharmacy_id INT NOT NULL REFERENCES pharmacies(id) ON DELETE CASCADE,
  prescribed_doctor_id INT NOT NULL REFERENCES doctors(id) ON DELETE CASCADE,
  refills_remaining INT NOT NULL DEFAULT 0,
  instructions VARCHAR(255),
  is_take_with_water BOOLEAN DEFAULT FALSE,
  is_take_with_food BOOLEAN DEFAULT FALSE
 );
