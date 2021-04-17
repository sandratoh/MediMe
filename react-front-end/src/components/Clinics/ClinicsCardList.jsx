// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Helpers
import { clinicContext } from "../Provider/ClinicContext";

// Components
import ClinicCard from "./ClinicCard";

export default function ClinicsCardList() {
  const { clinicalVisits, clinics, setClinicalVisitDetailId } = useContext(
    clinicContext
  );

  const visits = clinicalVisits.map((visit) => {
    const onSelect = () => setClinicalVisitDetailId(visit.id);
    return (
      <Link to="/clinics/view" key={visit.id}>
        <ClinicCard
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

  return <ul>{visits}</ul>;
}
