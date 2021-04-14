import { createContext, useState, useEffect } from "react";
import axios from "axios";

export default function DataProvider(props) {
  const [clinicalVisits, setClinicalVisits] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [clinicalVisitDetail, setClinicalVisitDetail] = useState({});
  const [clinicalVisitEdit, setClinicalVisitEdit] = useState({});

  const [labRecords, setLabRecords] = useState([]);
  const [labs, setLabs] = useState([]);
  const [labRecordsDetail, setLabRecordsDetail] = useState({});
  const [labRecordsEdit, setLabRecordsEdit] = useState({});

  const [doctors, setDoctors] = useState([]);

  const handleClinicEditClick = (id) => setClinicalVisitEdit(id);

  const handleLabCardClick = (id) => setLabRecordsDetail(id);
  const handleLabEditClick = (id) => setLabRecordsEdit(id);

  // clinics
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
        setClinicalVisits([res.data[0], ...clinicalVisits]);

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

  // labs
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
        // will only redirect if put goes through and no error is returned
        setLabRecords([res.data[0], ...labRecords]);

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

  const refreshAllClinics = () => {
    return axios.get("/api/clinics").then((res) => {
      setClinicalVisits(res.data.clinical_visits);
    });
  };

  const refreshAllLabs = () => {
    return axios.get("/api/labs").then((res) => {
      setLabRecords(res.data.labs);
    });
  };

  // useEffect(() => {
  //   refreshAllClinics();
  // }, []);

  useEffect(() => {
    const apiClinicalVisitsUrl = "/api/clinics";
    // const apiClinicalVisitEditUrl = {`/api/clinics/${clinicalVisitEdit}`};
    const apiClinicalVisitDetailUrl = `/api/clinics/3`;
    const apiClinicsUrl = "/api/clinics/list";
    const apiDoctorsUrl = "/api/doctors";
    const apiLabRecordsUrl = "/api/labs";
    const apiLabsUrl = "/api/labs/list";
    Promise.all([
      axios.get(apiClinicalVisitsUrl),
      axios.get(apiClinicalVisitDetailUrl),
      axios.get(apiClinicsUrl),
      axios.get(apiDoctorsUrl),
      axios.get(apiLabRecordsUrl),
      axios.get(apiLabsUrl),
    ]).then((res) => {
      const visits = res[0].data.clinical_visits;
      const visitDetail = res[1].data.clinical_visit;
      const clinics = res[2].data.clinics;
      const doctors = res[3].data.doctors;
      const records = res[4].data.labs;
      const labs = res[5].data.labs;

      setClinicalVisits(visits);
      setClinicalVisitDetail(visitDetail);
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
    clinicalVisits,
    clinics,
    doctors,
    handleClinicEditClick,
    labRecordsDetail,
    labRecordsEdit,
    labRecords,
    labs,
    handleLabCardClick,
    handleLabEditClick,
    refreshAllClinics,
    addClinicVisit,
    deleteClinicVisit,
    editClinicVisit,
    addLabRecord,
    deleteLabRecord,
    editLabRecord,
  };
  // console.log("clinic data in data provider", clinicData);

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}

export const dataContext = createContext();
