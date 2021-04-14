import { createContext, useState, useEffect } from "react";
import axios from "axios";

export default function DataProvider(props) {
  // Clinics states
  const [clinicalVisits, setClinicalVisits] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [clinicalVisitDetail, setClinicalVisitDetail] = useState({});
  const [clinicalVisitEdit, setClinicalVisitEdit] = useState({});

  // Doctor states
  const [doctors, setDoctors] = useState([]);

  // Lab states
  const [labRecords, setLabRecords] = useState([]);
  const [labs, setLabs] = useState([]);
  const [labRecordsDetail, setLabRecordsDetail] = useState({});
  const [labRecordsEdit, setLabRecordsEdit] = useState({});

  // Vaccination states
  const [vaccinations, setVaccinations] = useState([]);
  const [vaccinationDetail, setVaccinationDetail] = useState([]);
  const [doses, setDoses] = useState([]);
  const [doseDetail, setDoseDetail] = useState({});
  const [doseEdit, setDoseEdit] = useState({});
  const [allDoses, setAllDoses] = useState([]);

  // Clinics database calls
  const addClinicVisit = (visitDetail) => {
    return axios
      .post("/api/clinics/", visitDetail)
      .then((res) => {
        setClinicalVisits([res.data[0], ...clinicalVisits]);

        return res;
      })
      .catch((err) => console.log(err));
  };

  const editClinicVisit = (visitDetail) => {
    return axios
      .put(`/api/clinics/${clinicalVisitDetail}`, visitDetail)
      .then((res) => {
        // will only redirect if put goes through and no error is returned
        refreshAllClinics();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const deleteClinicVisit = () => {
    return axios
      .delete(`/api/clinics/${clinicalVisitDetail}`)
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

  // Labs database calls
  const addLabRecord = (labDetail) => {
    return axios
      .post("/api/labs/", labDetail)
      .then((res) => {
        setLabRecords([res.data[0], ...labRecords]);

        return res;
      })
      .catch((err) => console.log(err));
  };

  const editLabRecord = (labDetail) => {
    return axios
      .put(`/api/labs/${labRecordsDetail}`, labDetail)
      .then((res) => {
        refreshAllLabs();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const deleteLabRecord = () => {
    return axios
      .delete(`/api/labs/${labRecordsDetail}`)
      .then((res) => {
        refreshAllLabs();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const refreshAllLabs = () => {
    return axios.get("/api/labs").then((res) => {
      setLabRecords(res.data.labs);
    });
  };

  useEffect(() => {
    const apiClinicalVisitsUrl = "/api/clinics";
    const apiClinicsUrl = "/api/clinics/list";
    const apiDoctorsUrl = "/api/doctors";
    const apiLabRecordsUrl = "/api/labs";
    const apiLabsUrl = "/api/labs/list";
    const apiVaccinationsUrl = "/api/vaccinations";
    // const apiVaccinationDosesUrl = "/api/vaccinations/7/dose";
    const apiAllDoseUrl = "/api/vaccinations/dose";

    Promise.all([
      axios.get(apiClinicalVisitsUrl),
      axios.get(apiClinicsUrl),
      axios.get(apiDoctorsUrl),
      axios.get(apiLabRecordsUrl),
      axios.get(apiLabsUrl),
      axios.get(apiVaccinationsUrl),
      // axios.get(apiVaccinationDosesUrl),
      axios.get(apiAllDoseUrl),
    ]).then((res) => {
      // console.log("res", res);
      const visits = res[0].data.clinical_visits;
      const clinics = res[1].data.clinics;
      const doctors = res[2].data.doctors;
      const records = res[3].data.labs;
      const labs = res[4].data.labs;
      const vaccinations = res[5].data.vaccinations;
      const allDoses = res[6].data.doses;
      // const doses = res[6].data.doses;

      setClinicalVisits(visits);
      setClinics(clinics);
      setDoctors(doctors);
      setLabRecords(records);
      setLabs(labs);
      setVaccinations(vaccinations);
      setAllDoses(allDoses);
      // setDoses(doses);
      return;
    });
  }, []);

  // need to rename this variable
  const data = {
    // Clinics exports
    clinicalVisitDetail,
    setClinicalVisitDetail,
    clinicalVisitEdit,
    setClinicalVisitEdit,
    clinicalVisits,
    addClinicVisit,
    editClinicVisit,
    deleteClinicVisit,
    clinics,
    // Doctor exports
    doctors,
    // Labs exports
    labRecordsDetail,
    setLabRecordsDetail,
    labRecordsEdit,
    setLabRecordsEdit,
    labRecords,
    addLabRecord,
    deleteLabRecord,
    editLabRecord,
    labs,
    // Vaccinations exports
    vaccinations,
    setVaccinationDetail,
    doses,
    doseDetail,
    doseEdit,
    setDoseDetail,
    setDoseEdit,
    allDoses,
  };

  console.log("data", data);

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}

export const dataContext = createContext();
