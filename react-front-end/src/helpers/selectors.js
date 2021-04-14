//findClinicById
export function findClinicById(clinics, id) {
  let name;
  clinics.forEach((clinic) => {
    if (clinic.id === id) {
      name = clinic.name;
    }
  });
  return name;
};

//findDoctorById
export function findDoctorById(doctors, id) {
  let name;
  doctors.forEach((doctor) => {
    if (doctor.id === id) {
      name = doctor.name;
    }
  });

  return name;
};

//findLabById
export function findLabById(labs, id) {
  let name;
  labs.forEach((lab) => {
    if (lab.id === id) {
      name = lab.name;
    }
  });
  return name;
}

//findVaccinationById
export function findVaccinationById(vaccinations, id) {
  const vaccination = vaccinations.find(v => v.id === id);
  return vaccination.name;
}

// Refactor and combine all selectors to one
export function findNameById(arr, id) {
  const dataObj = arr.find(elem => elem.id === id);
  return dataObj ? dataObj.name : null;
}