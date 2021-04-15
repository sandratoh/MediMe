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

  const vaccines = vaccinations.map((vaccination) => {
    // console.log("prev vaccination detail:", vaccinationDetail);
    // console.log("vaccination from vacc card list", vaccination);
    // console.log("vaccination id from vacc card list", vaccination.id);
    // setVaccinationDetail(9302);

    // To find dose array: filter doses to return only ones that vaccination_id = vaccine id
    return (
      <VaccinationCard
        key={vaccination.id}
        className="list-items"
        name={vaccination.name}
        doses={allDoses.filter(
          (dose) => dose.vaccination_id === vaccination.id
        )}
        vaccineId={vaccinationDetail}
        total={vaccination.total_num_doses}
        onClick={() => setVaccinationDetail(vaccination.id)}
      />
    );
  });

  console.log("after vaccination detail:", vaccinationDetail);

  return <ul>{vaccines}</ul>;
}
