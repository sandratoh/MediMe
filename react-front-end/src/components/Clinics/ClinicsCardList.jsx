import { useEffect, useState } from "react";
import ClinicCard from "./ClinicCard";
import axios from "axios";


export default function ClinicsCardList(props) {
  
  const [clinicalVisits, setClinicalVisits] = useState([]);
  const [clinics, setClinics] = useState([]);
  
  useEffect(() => {
    const apiClinicalVisitsUrl = '/api/clinics';
    const apiClinicsUrl = '/api/clinics/list';
    Promise.all([
      axios.get(apiClinicalVisitsUrl),
      axios.get(apiClinicsUrl)
    ]).then(res => {
        // console.log('visit', res[0].data.clinical_visits);
        // console.log('clinics-list', res[1].data.clinics);
        const visits = res[0].data.clinical_visits;
        const clinics = res[1].data.clinics;

        setClinicalVisits(visits);
        setClinics(clinics);
        return;
      })
  },[])


  const visits = clinicalVisits.map((visit) => {
    return (
      <ClinicCard
        key={visit.id}
        className="list-items"
        date={visit.date}
        type={visit.type_of_visit}
        value={visit.clinic_id}
        clinics={clinics}
      />
    );
  });
  return <ul>{visits}</ul>;
}
