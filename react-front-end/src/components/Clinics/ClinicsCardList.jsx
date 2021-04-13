import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../hooks/DataProvider";
import ClinicCard from "./ClinicCard";
import axios from "axios";

export default function ClinicsCardList() {
  const { clinicalVisits, clinics, setClinicalVisitDetail, setClinicalVisits, fetchAllClinics, clinicalVisitDetail } = useContext(
    dataContext
  )

  
  // console.log("clinical visits in card list", clinicalVisits);
  // make new state to track???

  // useEffect(() => {
  //   fetchAllClinics()
  // }, []);
  
  // useEffect(() => {
  //   axios
  //     .get("/api/clinics")
  //     .then(res => setClinicalVisits(res))
  // }, []);

  const handleClinicCardClick = (id) => setClinicalVisitDetail(id);

  // console.log("cliniical Visits: ", clinicalVisitDetail)
  const visits = clinicalVisits.map((visit) => {
    
    return (
      <Link to={`/clinics/${visit.id}`}>
        <ClinicCard
          key={visit.id}
          className="list-items"
          date={visit.date}
          type={visit.type_of_visit}
          value={visit.clinic_id}
          clinics={clinics}
          onClick={() => handleClinicCardClick(visit.id)}
        />
      </Link>
    );
  });

  return (
    <ul>
      <Link to="/clinics/view">{visits}</Link>
    </ul>
  )
}

