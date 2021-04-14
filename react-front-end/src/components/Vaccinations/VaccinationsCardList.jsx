import { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import VaccinationCard from "./VaccinationCard";

// Helpers
import { dataContext } from "../hooks/DataProvider";

export default function VaccinationsCardList() {
  const {
    allDoses,
    vaccinations,
    setVaccinationDetail,
    vaccinationDetail,
  } = useContext(dataContext);

  console.log("vaccinations", vaccinations);

  // To find dose array: filter doses to return only ones that vaccination_id = vaccine id

  const vaccines = vaccinations.map((vaccination) => {
    return (
      <VaccinationCard
        key={vaccination.id}
        className="list-items"
        name={vaccination.name}
        doses={allDoses.filter(
          (dose) => dose.vaccination_id === vaccination.id
        )}
        vaccineId={vaccinationDetail}
        onClick={() => setVaccinationDetail(vaccination.id)}
      />
    );
  });

  return <ul>{vaccines}</ul>;
}
