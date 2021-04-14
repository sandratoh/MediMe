import { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import VaccinationCard from "./VaccinationCard";

// Helpers
import { dataContext } from "../hooks/DataProvider";

export default function VaccinationsCardList() {
  const { vaccinations, setVaccinationDetail, vaccinationDetail } = useContext(
    dataContext
  );

  console.log("vaccinations", vaccinations);

  const vaccines = vaccinations.map((vaccination) => {
    return (
      <VaccinationCard
        key={vaccination.id}
        className="list-items"
        name={vaccination.name}
        vaccineId={vaccinationDetail}
        onClick={() => setVaccinationDetail(vaccination.id)}
      />
    );
  });

  return <ul>{vaccines}</ul>;
}
