// Libraries
import { useState, useEffect } from "react";
import axios from "axios";

export default function useClinicContext() {
  // Clinic states
  const [clinicalVisits, setClinicalVisits] = useState([]);
  const [clinicalVisitDetailId, setClinicalVisitDetailId] = useState({});
  const [clinicalVisitEditId, setClinicalVisitEditId] = useState({});
  const [clinics, setClinics] = useState([]);

  // Clinic database calls
  const clinicExists = (name) => {
    return clinics.find((clinic) => clinic.name === name) ? true : false;
  };

  const addClinic = (formData) => {
    return axios
      .post("/api/clinics/list", formData)
      .then(() => refreshAllClinicsList())
      .catch((err) => console.log(err));
  };

  const addClinicVisit = (formData) => {
    return axios
      .post("/api/clinics/", formData)
      .then((res) => {
        refreshAllClinics();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const editClinicVisit = (formData) => {
    return axios
      .put(`/api/clinics/${clinicalVisitDetailId}`, formData)
      .then((res) => {
        refreshAllClinics();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const deleteClinicVisit = () => {
    return axios
      .delete(`/api/clinics/${clinicalVisitDetailId}`)
      .then((res) => {
        refreshAllClinics();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const refreshAllClinics = () => {
    return axios.get("/api/clinics").then((res) => {
      setClinicalVisits(res.data.clinical_visits);
    });
  };

  const refreshAllClinicsList = () => {
    return axios.get("/api/clinics/list").then((res) => {
      setClinics(res.data.clinics);
    });
  };

  useEffect(() => {
    const apiClinicalVisitsUrl = "/api/clinics";
    const apiClinicsUrl = "/api/clinics/list";

    Promise.all([
      axios.get(apiClinicalVisitsUrl),
      axios.get(apiClinicsUrl),
    ]).then((res) => {
      const visits = res[0].data.clinical_visits;
      const clinics = res[1].data.clinics;
      setClinicalVisits(visits);
      setClinics(clinics);
      return;
    });
  }, []);

  // Clinic exports
  const clinicData = {
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
  };

  return clinicData;
}
