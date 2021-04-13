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

  const handleClinicCardClick = (id) => setClinicalVisitDetail(id);
  const handleClinicEditClick = (id) => setClinicalVisitEdit(id);

  const handleLabCardClick = (id) => setLabRecordsDetail(id);
  const handleLabEditClick = (id) => setLabRecordsEdit(id);

  // console.log("clinical visit detail state", clinicalVisitDetail);
  // console.log("lab record detail state", labRecordsDetail);
  // console.log("labs - data provider", labs);
  // console.log("lab records - data provider", labRecords);

  useEffect(() => {
    const apiClinicalVisitsUrl = "/api/clinics";
    const apiClinicsUrl = "/api/clinics/list";
    const apiDoctorsUrl = "/api/doctors";
    const apiLabRecordsUrl = "/api/labs";
    const apiLabsUrl = "/api/labs/list";
    Promise.all([
      axios.get(apiClinicalVisitsUrl),
      axios.get(apiClinicsUrl),
      axios.get(apiDoctorsUrl),
      axios.get(apiLabRecordsUrl),
      axios.get(apiLabsUrl),
    ]).then((res) => {
      // console.log('visit', res[0].data.clinical_visits);
      // console.log('clinics-list', res[1].data.clinics);

      const visits = res[0].data.clinical_visits;
      const clinics = res[1].data.clinics;
      const doctors = res[2].data.doctors;
      const records = res[3].data.labs;
      const labs = res[4].data.labs;

      setClinicalVisits(visits);
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
    clinicalVisitEdit,
    clinicalVisits,
    clinics,
    doctors,
    handleClinicCardClick,
    handleClinicEditClick,
    labRecordsDetail,
    labRecordsEdit,
    labRecords,
    labs,
    handleLabCardClick,
    handleLabEditClick,
  };
  // console.log("clinic data in data provider", clinicData);

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}

export const dataContext = createContext();
