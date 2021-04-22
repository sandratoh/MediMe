// Libraries
import { useState, useEffect } from "react";
import axios from "axios";

export default function useMedContext() {
  // Medication states
  const [medications, setMedications] = useState([]);
  const [medicationDetailId, setMedicationDetailId] = useState({});
  const [medicationEditId, setMedicationEditId] = useState({});

  // Pharmacy states
  const [pharmacies, setPharmacies] = useState([]);

  // Medication database calls
  const addMedication = (formData) => {
    return axios
      .post("/api/medications", formData)
      .then((res) => {
        refreshAllMedications();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const editMedication = (formData) => {
    return axios
      .put(`/api/medications/${medicationDetailId}`, formData)
      .then((res) => {
        refreshAllMedications();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const deleteMedication = () => {
    return axios
      .delete(`/api/medications/${medicationDetailId}`)
      .then((res) => {
        refreshAllMedications();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const refreshAllMedications = () => {
    return axios.get("/api/medications").then((res) => {
      setMedications(res.data.medications);
    });
  };

  // Pharmacies database calls
  const pharmacyExists = (name) => {
    return pharmacies.find((pharmacy) => pharmacy.name === name) ? true : false;
  };

  const addPharmacy = (formData) => {
    return axios
      .post("/api/pharmacies", formData)
      .then(() => refreshAllPharmacies())
      .catch((err) => console.log(err));
  };

  const refreshAllPharmacies = () => {
    return axios.get("/api/pharmacies").then((res) => {
      setPharmacies(res.data.pharmacies);
    });
  };

  useEffect(() => {
    const apiMedRecordsUrl = "/api/medications";
    const apiPharmaciesUrl = "/api/pharmacies";

    Promise.all([
      axios.get(apiMedRecordsUrl),
      axios.get(apiPharmaciesUrl),
    ]).then((res) => {
      const medications = res[0].data.medications;
      const pharmacies = res[1].data.pharmacies;

      setMedications(medications);
      setPharmacies(pharmacies);

      return;
    });
  }, []);

  // Medication exports
  const medData = {
    medications,
    setMedications,
    medicationDetailId,
    setMedicationDetailId,
    medicationEditId,
    setMedicationEditId,
    addMedication,
    editMedication,
    deleteMedication,
    // Pharmacies
    pharmacies,
    setPharmacies,
    pharmacyExists,
    addPharmacy,
  };

  return medData;
};
