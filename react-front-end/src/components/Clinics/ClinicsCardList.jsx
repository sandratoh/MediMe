import { useContext } from "react";
import { dataContext } from "../hooks/DataProvider";
import ClinicCard from "./ClinicCard";

export default function ClinicsCardList() {
  const { clinicalVisits, clinics } = useContext(dataContext);

  // console.log("clinical visits in card list", clinicalVisits);
  // console.log("clinics in card list", clinics);
  // console.log("clinic card:", clinics);
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
