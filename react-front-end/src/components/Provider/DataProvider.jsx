// Libraries
import { createContext } from "react";

// Helpers
import useAppContext from "./Hooks/useAppContext";
import useClinicContext from "./Hooks/useClinicContext";
import useLabContext from "./Hooks/useLabContext";
import useMedContext from "./Hooks/useMedContext";
import useVaxContext from "./Hooks/useVaxContext";

export default function DataProvider(props) {
  // App imports
  const {
    // App menu
    menu,
    setMenu,
    // Doctor
    doctors,
    doctorExists,
    addDoctor,
    // User
    users,
    userDetailId,
    userEditId,
    setUserDetailId,
    setUserEditId,
    addUser,
    editUser,
    loginUser,
  } = useAppContext();

  // Clinic imports
  const {
    clinics,
    clinicalVisits,
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

  // Lab imports
  const {
    labs,
    labRecords,
    labRecordDetailId,
    labRecordEditId,
    setLabRecordDetailId,
    setLabRecordEditId,
    addLabRecord,
    deleteLabRecord,
    editLabRecord,
    labExists,
    addLab,
  } = useLabContext();

  // Vaccination and dose imports
  const {
    vaccinations,
    vaccinationDetailId,
    setVaccinationDetailId,
    addVaccinationRecord,
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

  // Medication imports
  const {
    medications,
    medicationDetailId,
    setMedicationDetailId,
    medicationEditId,
    setMedicationEditId,
    addMedication,
    editMedication,
    deleteMedication,
    // Pharmacies
    pharmacies,
    pharmacyExists,
    addPharmacy,
  } = useMedContext();

  // Data exports
  const data = {
    // App menu
    menu,
    setMenu,
    // Clinic
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
    // Doctor
    doctors,
    doctorExists,
    addDoctor,
    // Labs
    labs,
    labRecords,
    labRecordDetailId,
    labRecordEditId,
    setLabRecordDetailId,
    setLabRecordEditId,
    addLabRecord,
    deleteLabRecord,
    editLabRecord,
    labExists,
    addLab,
    // Medication
    medications,
    medicationDetailId,
    medicationEditId,
    setMedicationDetailId,
    setMedicationEditId,
    addMedication,
    editMedication,
    deleteMedication,
    // Pharmacy
    pharmacies,
    pharmacyExists,
    addPharmacy,
    // User
    users,
    userDetailId,
    userEditId,
    setUserDetailId,
    setUserEditId,
    addUser,
    editUser,
    loginUser,
    // Vaccination and dose
    vaccinations,
    vaccinationDetailId,
    setVaccinationDetailId,
    addVaccinationRecord,
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

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}

export const dataContext = createContext();
