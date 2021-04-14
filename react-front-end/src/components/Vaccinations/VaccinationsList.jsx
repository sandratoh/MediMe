import { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../hooks/DataProvider";
import VaccinationCard from "./VaccinationCard";
import VaccinationsCardList from "./VaccinationsCardList";
import IconButton from "../IconButton";
import BackButton from "../BackButton";

import "./VaccinationsList.scss";

export default function VaccinationsList() {
  const { vaccinations } = useContext(dataContext);

  return (
    <section className="vaccinations-list">
      <div className="vaccinations-list--icons">
        <BackButton />
        <IconButton new color="secondary" variant="contained">
          <Link to="/vaccinations/new">New</Link>
        </IconButton>
      </div>
      <h1 className="vaccinations-list--title">Vaccinations</h1>
      <div className="vaccinations-list--content">
        {/* <VaccinationCard /> */}
      </div>
      <VaccinationsCardList />
    </section>
  );
}
