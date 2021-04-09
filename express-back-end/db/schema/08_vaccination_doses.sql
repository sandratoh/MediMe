DROP TABLE IF EXISTS vaccination_doses CASCADE;
CREATE TABLE vaccination_doses (
  id SERIAL PRIMARY KEY NOT NULL,
  vaccination_id INT NOT NULL REFERENCES vaccinations(id) ON DELETE CASCADE,
  serial_number VARCHAR(255) NOT NULL,
  date_taken DATE NOT NULL DEFAULT CURRENT_DATE,
  administration_site VARCHAR(255),
  next_scheduled_dose DATE
 );