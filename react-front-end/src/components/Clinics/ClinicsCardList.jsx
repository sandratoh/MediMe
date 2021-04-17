// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import ClinicCard from "./ClinicCard";

// Helpers
import { dataContext } from "../Provider/DataProvider";

export default function ClinicsCardList() {
  const { clinicalVisits, clinics, setClinicalVisitDetailId } = useContext(
    dataContext
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
