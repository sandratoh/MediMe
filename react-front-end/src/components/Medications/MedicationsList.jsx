// Libraries
import { Link } from "react-router-dom";

// Components
import IconButton from "../IconButton";
import MedicationCardList from "./MedicationCardList";
import NavUpButton from "../NavUpButton";

// Material UI components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Stylesheet
import "../Clinics/ClinicsList.scss";

export default function MedicationsList() {
  return (
    <section className="clinics-list">
      <div className="clinics-list--icons">
        <Link to="/">
          <ArrowBackIosIcon />
        </Link>
        <IconButton new color="secondary" variant="contained">
          <Link to="/medications/new">New</Link>
        </IconButton>
        <NavUpButton/>
      </div>
      <h1 className="clinics-list--title">Medication Records</h1>
      <div className="clinics-list--content">
        <MedicationCardList />
      </div>
    </section>
  );
}
