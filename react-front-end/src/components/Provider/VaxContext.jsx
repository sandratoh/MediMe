import { useState, useEffect } from "react";
import axios from "axios";

export default function VaxContext() {
  // Vaccination states
  const [vaccinations, setVaccinations] = useState([]);
  const [vaccinationDetailId, setVaccinationDetailId] = useState({});

  // Vaccination-dose states
  const [doses, setDoses] = useState([]);
  const [doseDetailId, setDoseDetailId] = useState({});
  const [doseEditId, setDoseEditId] = useState({});

  // Vaccinations & Doses database calls
  // add vaccine record
  const addVaccinationRecord = (formData) => {
    return axios
      .post("/api/vaccinations", formData)
      .then((res) => {
        setVaccinations([res.data[0], ...vaccinations]);

        return res;
      })
      .catch((err) => console.log(err));
  };

  // add dose record
  const addDoseRecord = (formData) => {
    return axios
      .post(`/api/vaccinations/${vaccinationDetailId}/dose`, formData)
      .then((res) => {
        refreshAllDoses();
        refreshAllVaccinations();

        return res;
      })
      .catch((err) => console.log(err));
  };

  // edit dose record
  const editDoseRecord = (formData) => {
    return axios
      .put(
        `/api/vaccinations/${vaccinationDetailId}/dose/${doseDetailId}`,
        formData
      )
      .then((res) => {
        refreshAllDoses();
        refreshAllVaccinations();

        return res;
      })
      .catch((err) => console.log(err));
  };

  // delete dose record
  const deleteDoseRecord = () => {
    return axios
      .delete(`/api/vaccinations/${vaccinationDetailId}/dose/${doseDetailId}`)
      .then((res) => {
        refreshAllDoses();
        refreshAllVaccinations();

        return res;
      })
      .catch((err) => console.log(err));
  };

  // refresh all vaccines
  const refreshAllVaccinations = () => {
    return axios.get("/api/vaccinations").then((res) => {
      setVaccinations(res.data.vaccinations);
    });
  };

  // refresh all dose
  const refreshAllDoses = () => {
    return axios.get("/api/vaccinations/dose").then((res) => {
      setDoses(res.data.doses);
    });
  };

  useEffect(() => {
    const apiVaccinationsUrl = "/api/vaccinations";
    const apiAllDoseUrl = "/api/vaccinations/dose";

    Promise.all([axios.get(apiVaccinationsUrl), axios.get(apiAllDoseUrl)]).then(
      (res) => {
        const vaccinations = res[0].data.vaccinations;
        const doses = res[1].data.doses;
        setVaccinations(vaccinations);
        setDoses(doses);
        return;
      }
    );
  }, []);

  const vaxData = {
    // Vaccinations exports
    vaccinations,
    vaccinationDetailId,
    setVaccinationDetailId,
    addVaccinationRecord,
    // Vaccinations-dose exports
    doses,
    doseDetailId,
    doseEditId,
    setDoseDetailId,
    setDoseEditId,
    addDoseRecord,
    editDoseRecord,
    deleteDoseRecord,
  };

  return vaxData;
}
