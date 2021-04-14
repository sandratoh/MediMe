import { Link } from "react-router-dom";
import ClinicsCardList from "./ClinicsCardList";
import IconButton from "../IconButton";
import BackButton from "../BackButton";

import "./ClinicsList.scss";

export default function ClinicsList() {
  return (
    <section className="clinics-list">
      <div className="clinics-list--icons">
        <BackButton />
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
