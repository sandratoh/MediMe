import { createContext, useState, useEffect } from "react";
import axios from "axios";

export default function DataProvider(props) {
  // User and App states
  const [menu, setMenu] = useState(false);


  // Clinic states
  const [clinics, setClinics] = useState([]);
  const [clinicalVisits, setClinicalVisits] = useState([]);
  const [clinicalVisitDetailId, setClinicalVisitDetailId] = useState({});
  const [clinicalVisitEditId, setClinicalVisitEditId] = useState({});

  // Doctor states
  const [doctors, setDoctors] = useState([]);

  // Lab states
  const [labs, setLabs] = useState([]);
  const [labRecords, setLabRecords] = useState([]);
  const [labRecordDetailId, setLabRecordDetailId] = useState({});
  const [labRecordEditId, setLabRecordEditId] = useState({});

  // Medication states
  const [medications, setMedications] = useState([]);
  const [medicationDetailId, setMedicationDetailId] = useState({});
  const [medicationEditId, setMedicationEditId] = useState({});

  // Pharmacy states
  const [pharmacies, setPharmacies] = useState([]);

  // User states
  const [users, setUsers] = useState([]);
  const [userDetailId, setUserDetailId] = useState({});
  const [userEditId, setUserEditId] = useState({})

  // Vaccination states
  const [vaccinations, setVaccinations] = useState([]);
  const [vaccinationDetailId, setVaccinationDetailId] = useState({});

  // Vaccination-dose states
  const [doses, setDoses] = useState([]);
  const [doseDetailId, setDoseDetailId] = useState({});
  const [doseEditId, setDoseEditId] = useState({});

  // Clinics database calls
  const checkClinic = (name) => {
    console.log('clinics', clinics);
    return clinics.find(clinic => clinic.name === name) ? true : false;
  };


  const addNewClinic = (formData) => {
    console.log('formdata', formData);
    return axios
      .post("/api/clinics/list", formData)
      .then(res => refreshAllClinicsList())
      .catch(err => console.log(err));
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

  // Labs database calls
  const addLabRecord = (formData) => {
    return axios
      .post("/api/labs/", formData)
      .then((res) => {
        refreshAllLabs();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const editLabRecord = (formData) => {
    return axios
      .put(`/api/labs/${labRecordDetailId}`, formData)
      .then((res) => {
        refreshAllLabs();

        return res;
      })
      .catch((err) => console.log(err));
  };

  const deleteLabRecord = () => {
    return axios
      .delete(`/api/labs/${labRecordDetailId}`)
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

  // Users
  const addUser = (formData) => {
    return axios
    .post("/api/users", formData)
    .then((res) => {
      refreshAllUsers();

      return res;
    })
    .catch((err) => console.log(err));
  };

  const editUser = (formData) => {
    return axios
    .put(`/api/users/${userDetailId}`, formData)
    .then((res) => {
      refreshAllUsers();

      return res;
    })
    .catch((err) => console.log(err));
  };

  const loginUser = (formData) => {
    const { email, password } = formData;
    
    return axios
      .get("/api/users")
      .then((res) => {
        const users = res.data.users;
        const user = users.find(user => user.email === email);
        
        if (user.password === password.password) {
          return user;
        }
        return null;
      })
      .catch((err) => console.log(err));
  };

  const refreshAllUsers = () => {
    return axios.get("/api/users").then((res) => {
      setUsers(res.data.users);
    });
  };

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
    const apiClinicalVisitsUrl = "/api/clinics";
    const apiClinicsUrl = "/api/clinics/list";
    const apiDoctorsUrl = "/api/doctors";
    const apiLabRecordsUrl = "/api/labs";
    const apiLabsUrl = "/api/labs/list";
    const apiMedRecordsUrl = "/api/medications";
    const apiPharmaciesUrl = "/api/pharmacies";
    const apiVaccinationsUrl = "/api/vaccinations";
    const apiAllDoseUrl = "/api/vaccinations/dose";
    const apiAllUsersUrl = "api/users";
    

    Promise.all([
      axios.get(apiClinicalVisitsUrl),
      axios.get(apiClinicsUrl),
      axios.get(apiDoctorsUrl),
      axios.get(apiLabRecordsUrl),
      axios.get(apiLabsUrl),
      axios.get(apiVaccinationsUrl),
      axios.get(apiAllDoseUrl),
      axios.get(apiMedRecordsUrl),
      axios.get(apiPharmaciesUrl),
      axios.get(apiAllUsersUrl),
      
    ]).then((res) => {
      // console.log("res", res);
      const visits = res[0].data.clinical_visits;
      const clinics = res[1].data.clinics;
      const doctors = res[2].data.doctors;
      const records = res[3].data.labs;
      const labs = res[4].data.labs;
      const vaccinations = res[5].data.vaccinations;
      const doses = res[6].data.doses;
      const medications = res[7].data.medications;
      const pharmacies = res[8].data.pharmacies;
      const users = res[9].data.users;
      

      setClinicalVisits(visits);
      setClinics(clinics);
      setDoctors(doctors);
      setLabRecords(records);
      setLabs(labs);
      setVaccinations(vaccinations);
      setDoses(doses);
      setMedications(medications);
      setPharmacies(pharmacies);
      setUsers(users);
      
      return;
    });
  }, []);

  // need to rename this variable
  const data = {
    // User and App exports
    menu,
    setMenu,
    // Clinics exports
    clinics,
    clinicalVisits,
    clinicalVisitDetailId,
    clinicalVisitEditId,
    setClinicalVisitDetailId,
    setClinicalVisitEditId,
    addClinicVisit,
    editClinicVisit,
    deleteClinicVisit,
    checkClinic,
    addNewClinic,
    // Doctor exports
    doctors,
    // Labs exports
    labs,
    labRecords,
    labRecordDetailId,
    labRecordEditId,
    setLabRecordDetailId,
    setLabRecordEditId,
    addLabRecord,
    deleteLabRecord,
    editLabRecord,
    // Medication exports
    medications,
    medicationDetailId,
    medicationEditId,
    setMedicationDetailId,
    setMedicationEditId,
    addMedication,
    editMedication,
    deleteMedication,
    // Pharmacy exports
    pharmacies,
    // User exports
    users,
    userDetailId,
    userEditId,
    setUserDetailId,
    setUserEditId,
    addUser,
    editUser,
    loginUser,
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

  // console.log("data", data);
  

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}

export const dataContext = createContext();
