import { useState, useEffect } from "react";
import axios from "axios";

export default function MedContext() {
  // Medication states
  const [medications, setMedications] = useState([]);
  const [medicationDetailId, setMedicationDetailId] = useState({});
  const [medicationEditId, setMedicationEditId] = useState({});
  // Pharmacy states
  const [pharmacies, setPharmacies] = useState([]);

  // Medications database calls
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

  const medData = {
    // Medication exports
    medications,
    setMedications,
    medicationDetailId,
    setMedicationDetailId,
    medicationEditId,
    setMedicationEditId,
    addMedication,
    editMedication,
    deleteMedication,
    pharmacies,
    setPharmacies,
  };

  return medData;
}
