// Libraries
import { Link } from "react-router-dom";

// Components
import VaccinationsCardList from "./VaccinationsCardList";
import IconButton from "../IconButton";
import BackButton from "../BackButton";

// Stylesheet
import "./VaccinationsList.scss";

export default function VaccinationsList() {

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
      </div>
      <VaccinationsCardList />
    </section>
  );
};
