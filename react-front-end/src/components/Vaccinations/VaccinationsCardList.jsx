import { useContext } from "react";

// Components
import VaccinationCard from "./VaccinationCard";

// Helpers
import { dataContext } from "../Provider/DataProvider";

export default function VaccinationsCardList() {
  const {
    doses,
    vaccinations,
    setVaccinationDetailId,
    vaccinationDetailId,
  } = useContext(dataContext);

  const vaccines = vaccinations.map((vaccination) => {
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
