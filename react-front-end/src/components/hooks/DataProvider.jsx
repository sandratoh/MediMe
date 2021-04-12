import { createContext, useState, useEffect } from "react";
import axios from "axios";

export default function DataProvider(props) {
  const [clinicalVisits, setClinicalVisits] = useState([]);
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const apiClinicalVisitsUrl = "/api/clinics";
    const apiClinicsUrl = "/api/clinics/list";
    Promise.all([
      axios.get(apiClinicalVisitsUrl),
      axios.get(apiClinicsUrl),
    ]).then((res) => {
      // console.log('visit', res[0].data.clinical_visits);
      // console.log('clinics-list', res[1].data.clinics);
      const visits = res[0].data.clinical_visits;
      const clinics = res[1].data.clinics;

      setClinicalVisits(visits);
      setClinics(clinics);
      return;
    });
  }, []);

  const clinicData = { clinicalVisits, clinics };
  console.log("clinic data in data provider", clinicData);

  return (
    <dataContext.Provider value={clinicData}>
      {props.children}
    </dataContext.Provider>
  );
}

export const dataContext = createContext();
