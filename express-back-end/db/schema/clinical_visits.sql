DROP TABLE IF EXISTS clinics_visits CASCADE;
CREATE TABLE clinics_visits (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  clinic_id INT NOT NULL REFERENCES clinics(id) ON DELETE CASCADE,
  referral_doctor_id INT NOT NULL REFERENCES doctors(id) ON DELETE CASCADE,
  date DATE DEFAULT CURRENT_DATE,
  type_of_visit VARCHAR(10) CHECK (type_of_visit IN ('CLINIC', 'HOSPITAL')),
  reason_for_visit VARCHAR(255),
  doctor_diagnosis VARCHAR(255)
 );