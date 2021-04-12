import { useEffect, useState } from "react";
import ClinicCard from "./ClinicCard";
import axios from "axios";


export default function ClinicsCardList(props) {
  
  const [clinicData, setClinicData] = useState([]);
  useEffect(() => {
    const apiClinicalVisitsUrl = '/api/clinics';
    axios
      .get(apiClinicalVisitsUrl)
      .then(res => {
        console.log(res.data.clinical_visits);
        return setClinicData(res.data.clinical_visits);
      })
  },[])


  const visits = clinicData.map((clinical_visit) => {
    return (
      <ClinicCard
        key={clinical_visit.id}
        className="list-items"
        date={clinical_visit.date}
        type={clinical_visit.type_of_visit}
        value={clinical_visit.clinic_id}
      />
    );
  });
  return <ul>{visits}</ul>;
}
