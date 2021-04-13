import { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../hooks/DataProvider";
import ClinicCard from "./ClinicCard";

export default function ClinicsCardList() {
  const { clinicalVisits, clinics, handleClinicCardClick, fetchAllClinics, clinicalVisitDetail } = useContext(
    dataContext
  );

  // componentDidMount() {
  //   fetchAllClinics()
  // }


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
