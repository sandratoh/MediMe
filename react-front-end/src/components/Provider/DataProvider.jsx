import { createContext } from "react";
import useAppContext from "./Hooks/useAppContext";
import useClinicContext from "./Hooks/useClinicContext";
import useLabContext from "./Hooks/useLabContext";
import useMedContext from "./Hooks/useMedContext";
import useVaxContext from "./Hooks/useVaxContext";

export default function DataProvider(props) {
  const {
    // App menu exports
    menu,
    setMenu,
    // Doctor exports
    doctors,
    doctorExists,
    addDoctor,
    // User exports
    users,
    userDetailId,
    userEditId,
    setUserDetailId,
    setUserEditId,
    addUser,
    editUser,
    loginUser,
  } = useAppContext();

  // Clinic exports
  const {
    clinics,
    // setClinics,
    clinicalVisits,
    // setClinicalVisits,
    clinicalVisitDetailId,
    setClinicalVisitDetailId,
    clinicalVisitEditId,
    setClinicalVisitEditId,
    addClinicVisit,
    editClinicVisit,
    deleteClinicVisit,
    addClinic,
    clinicExists,
  } = useClinicContext();

  const {
    labs,
    labRecords,
    // setLabRecords,
    labRecordDetailId,
    labRecordEditId,
    setLabRecordDetailId,
    setLabRecordEditId,
    addLabRecord,
    deleteLabRecord,
    editLabRecord,
    // setLabs,
  } = useLabContext();

  const {
    // Vaccinations exports
    vaccinations,
    vaccinationDetailId,
    setVaccinationDetailId,
    addVaccinationRecord,
    // Doses exports
    doses,
    setDoses,
    doseDetailId,
    setDoseDetailId,
    doseEditId,
    setDoseEditId,
    addDoseRecord,
    editDoseRecord,
    deleteDoseRecord,
  } = useVaxContext();

  // Medication exports
  const {
    medications,
    // setMedications,
    medicationDetailId,
    setMedicationDetailId,
    medicationEditId,
    setMedicationEditId,
    addMedication,
    editMedication,
    deleteMedication,
    // Pharmacies
    pharmacies,
    // setPharmacies,
  } = useMedContext();

  // need to rename this variable
  const data = {
    // App menu exports
    menu,
    setMenu,
    // Clinics exports
    clinics,
    clinicalVisits,
    clinicalVisitDetailId,
    clinicalVisitEditId,
    setClinicalVisitDetailId,
    setClinicalVisitEditId,
    addClinicVisit,
    editClinicVisit,
    deleteClinicVisit,
    clinicExists,
    addClinic,
    // Doctor exports
    doctors,
    doctorExists,
    addDoctor,
    // Labs exports
    labs,
    labRecords,
    labRecordDetailId,
    labRecordEditId,
    setLabRecordDetailId,
    setLabRecordEditId,
    addLabRecord,
    deleteLabRecord,
    editLabRecord,
    // Medication exports
    medications,
    medicationDetailId,
    medicationEditId,
    setMedicationDetailId,
    setMedicationEditId,
    addMedication,
    editMedication,
    deleteMedication,
    // Pharmacy exports
    pharmacies,
    // User exports
    users,
    userDetailId,
    userEditId,
    setUserDetailId,
    setUserEditId,
    addUser,
    editUser,
    loginUser,
    // Vaccinations exports
    vaccinations,
    vaccinationDetailId,
    setVaccinationDetailId,
    addVaccinationRecord,
    // Vaccinations-dose exports
    doses,
    setDoses,
    doseDetailId,
    doseEditId,
    setDoseDetailId,
    setDoseEditId,
    addDoseRecord,
    editDoseRecord,
    deleteDoseRecord,
  };

  // console.log("data", data);

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}

export const dataContext = createContext();
