/*
 * Refactor and combine all selectors to one:
 * findClinicById
 * findDoctorById
 * findLabById
 * findVaccinationById
*/

export function findNameById(arr, id) {
  const dataObj = arr.find(elem => elem.id === id);
  return dataObj ? dataObj.name : null;
};