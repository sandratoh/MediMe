// Libraries
import { Link } from "react-router-dom";

// Components
import ClinicsCardList from "./ClinicsCardList";
import IconButton from "../IconButton";

// Material UI Components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Stylesheet
import "./ClinicsList.scss";

export default function ClinicsList() {
  return (
    <section className="clinics-list">
      <div className="clinics-list--icons">
        <Link to="/">
          <ArrowBackIosIcon />
        </Link>
        <IconButton new color="secondary" variant="contained">
          <Link to="/clinics/new">New</Link>
        </IconButton>
      </div>
      <h1 className="clinics-list--title">Clinical Visits</h1>
      <div className="clinics-list--content">
        <ClinicsCardList />
      </div>
    </section>
  );
}
