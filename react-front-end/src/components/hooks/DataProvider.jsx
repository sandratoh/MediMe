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
  const [doses, setDoses] = useState([]);
  const [doseDetail, setDoseDtail] = useState({});
  const [doseEdit, setDoseEdit] = useState({});

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
    // const apiClinicalVisitEditUrl = {`/api/clinics/${clinicalVisitEdit}`};
    // const apiClinicalVisitDetailUrl = `/api/clinics/3`;
    const apiClinicsUrl = "/api/clinics/list";
    const apiDoctorsUrl = "/api/doctors";
    const apiLabRecordsUrl = "/api/labs";
    const apiLabsUrl = "/api/labs/list";
    Promise.all([
      axios.get(apiClinicalVisitsUrl),
      // axios.get(apiClinicalVisitDetailUrl),
      axios.get(apiClinicsUrl),
      axios.get(apiDoctorsUrl),
      axios.get(apiLabRecordsUrl),
      axios.get(apiLabsUrl),
    ]).then((res) => {
      const visits = res[0].data.clinical_visits;
      // const visitDetail = res[1].data.clinical_visit;
      const clinics = res[1].data.clinics;
      const doctors = res[2].data.doctors;
      const records = res[3].data.labs;
      const labs = res[4].data.labs;

      setClinicalVisits(visits);
      // setClinicalVisitDetail(visitDetail);
      setClinics(clinics);
      setDoctors(doctors);
      setLabRecords(records);
      setLabs(labs);
      return;
    });
  }, []);

  // need to rename this variable
  const data = {
    clinicalVisitDetail,
    setClinicalVisitDetail,
    clinicalVisitEdit,
    setClinicalVisitEdit,
    clinicalVisits,
    addClinicVisit,
    editClinicVisit,
    deleteClinicVisit,
    clinics,
    refreshAllClinics,
    
    doctors,
    
    labRecordsDetail,
    setLabRecordsDetail,
    labRecordsEdit,
    setLabRecordsEdit,
    labRecords,
    addLabRecord,
    deleteLabRecord,
    editLabRecord,
    labs,
    
    
  };
  // console.log("clinic data in data provider", clinicData);

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}

export const dataContext = createContext();
