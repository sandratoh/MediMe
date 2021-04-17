// Libraries
import { Link } from "react-router-dom";

// Components
import IconButton from "../IconButton";
import VaccinationsCardList from "./VaccinationsCardList";

// Material UI Components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Stylesheet
import "./VaccinationsList.scss";

export default function VaccinationsList() {
  return (
    <section className="vaccinations-list">
      <div className="vaccinations-list--icons">
        <Link to="/">
          <ArrowBackIosIcon />
        </Link>
        <IconButton new color="secondary" variant="contained">
          <Link to="/vaccinations/new">New</Link>
        </IconButton>
      </div>
      <h1 className="vaccinations-list--title">Vaccinations</h1>
      <div className="vaccinations-list--content"></div>
      <VaccinationsCardList />
    </section>
  );
}
