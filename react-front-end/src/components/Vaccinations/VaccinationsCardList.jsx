import { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import VaccinationCard from "./VaccinationCard";

// Helpers
import { dataContext } from "../hooks/DataProvider";

export default function VaccinationsCardList() {
  const {
    doses,
    vaccinations,
    setVaccinationDetailId,
    vaccinationDetailId,
  } = useContext(dataContext);

  const vaccines = vaccinations.map((vaccination) => {
    // To find dose array: filter doses to return only ones that vaccination_id = vaccine id
    return (
      <VaccinationCard
        key={vaccination.id}
        className="list-items"
        name={vaccination.name}
        doses={doses.filter((dose) => dose.vaccination_id === vaccination.id)}
        vaccineId={vaccinationDetailId}
        total={vaccination.total_num_doses}
        onClick={() => setVaccinationDetailId(vaccination.id)}
      />
    );
  });

  return <ul>{vaccines}</ul>;
}
