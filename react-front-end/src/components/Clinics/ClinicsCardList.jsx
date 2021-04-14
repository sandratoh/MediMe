// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Helpers
import { dataContext } from "../hooks/DataProvider";

// Components
import ClinicCard from "./ClinicCard";

export default function ClinicsCardList() {
  const { clinicalVisits, clinics, setClinicalVisitDetail } = useContext(
    dataContext
  );

  const visits = clinicalVisits.map((visit) => {
    const onSelect = () => setClinicalVisitDetail(visit.id);
    return (
      <Link to="/clinics/view">
        <ClinicCard
          key={visit.id}
          className="list-items"
          date={visit.date}
          type={visit.type_of_visit}
          value={visit.clinic_id}
          clinics={clinics}
          onClick={onSelect}
        />
      </Link>
    );
  });

  return (
    <ul>
      <Link to="/clinics/view">{visits}</Link>
    </ul>
  );
}
