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

  // Medication states
  const [medRecords, setMedRecords] = useState([]);
  const [medications, setMedications] = useState([]);
  const [medRecordsDetail, setMedRecordsDetail] = useState({});
  const [medRecordsEdit, setMedRecordsEdit] = useState({});

  // Vaccination states
  const [vaccinations, setVaccinations] = useState([]);
  const [vaccinationDetail, setVaccinationDetail] = useState({});

  // Vaccination doses states
  const [doseDetail, setDoseDetail] = useState({});
  const [doseEdit, setDoseEdit] = useState({});
  const [allDoses, setAllDoses] = useState([]);

  // Clinics database calls
  const addClinicVisit = (visitDetail) => {
    return axios
      .post("/api/clinics/", visitDetail)
      .then((res) => {
        refreshAllClinics();

        // setClinicalVisits([res.data[0], ...clinicalVisits]);

        return res;
      })
      .catch((err) => console.log(err));
  };

  const editClinicVisit = (visitDetail) => {
    return axios
      .put(`/api/clinics/${clinicalVisitDetail}`, visitDetail)
      .then((res) => {
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
        refreshAllLabs();

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

  // Medications database calls
  const addMedication = (medDetail) => {
    return axios
      .post("/api/medications", medDetail)
      .then((res) => {
        refreshAllMedications();
        
        return res;
      })
      .catch((err) => console.log(err));
  }

  const editMedication = (medDetail) => {
    return axios
      .put(`/api/medications/${medRecordsDetail}`, medDetail)
      .then((res) => {
        refreshAllMedications();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const deleteMedication = () => {
    return axios
      .delete(`/api/medications/${medRecordsDetail}`)
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

  // Vaccinations & Doses database calls

  // add vaccine record
  const addVaccinationRecord = (vaccinationData) => {
    return axios
      .post("/api/vaccinations", vaccinationData)
      .then((res) => {
        console.log("res from data provider", res);
        console.log("res.data from data provider", res.data);
        setVaccinations([res.data[0], ...vaccinations]);

        return res;
      })
      .catch((err) => console.log(err));
  };

  // add dose record
  // vaccine_id needs to set it from onClick
  const addDoseRecord = (doseData) => {
    return (
      axios
        // vaccination detail is not being set anyhwere
        .post(`/api/vaccinations/${vaccinationDetail}/dose`, doseData)
        .then((res) => {
          
          refreshAllDoses();
          refreshAllVaccinations();

          return res;
        })
        .catch((err) => console.log(err))
    );
  };

  // edit dose record
  const editDoseRecord = (doseDetail, vaccinationDetail) => {
    return axios
      .put(
        `/api/vaccinations/${vaccinationDetail}/dose/${doseDetail}`,
        doseDetail
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
      .delete(`/api/vaccinations/${vaccinationDetail}/dose/${doseDetail}`)
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
      setAllDoses(res.data.doses);
    });
  };

  useEffect(() => {
    const apiClinicalVisitsUrl = "/api/clinics";
    const apiClinicsUrl = "/api/clinics/list";
    const apiDoctorsUrl = "/api/doctors";
    const apiLabRecordsUrl = "/api/labs";
    const apiLabsUrl = "/api/labs/list";
    const apiMedRecordsUrl = "/api/medications"
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
      axios.get(apiAllDoseUrl),
      axios.get(apiMedRecordsUrl),
    ]).then((res) => {
      // console.log("res", res);
      const visits = res[0].data.clinical_visits;
      const clinics = res[1].data.clinics;
      const doctors = res[2].data.doctors;
      const records = res[3].data.labs;
      const labs = res[4].data.labs;
      const vaccinations = res[5].data.vaccinations;
      const allDoses = res[6].data.doses;
      const medications = res[7].data.medications;

      setClinicalVisits(visits);
      setClinics(clinics);
      setDoctors(doctors);
      setLabRecords(records);
      setLabs(labs);
      setVaccinations(vaccinations);
      setAllDoses(allDoses);
      setMedications(medications);
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
    // Medication exports
    medRecords,
    medications,
    medRecordsDetail,
    setMedRecordsDetail,
    medRecordsEdit,
    setMedRecordsEdit,
    addMedication,
    editMedication,
    deleteMedication,
    // Vaccinations exports
    vaccinations,
    setVaccinationDetail,
    vaccinationDetail,
    doseDetail,
    doseEdit,
    setDoseDetail,
    setDoseEdit,
    allDoses,
    addVaccinationRecord,
    addDoseRecord,
    editDoseRecord,
    deleteDoseRecord,
  };

  console.log("data", data);

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}

export const dataContext = createContext();
