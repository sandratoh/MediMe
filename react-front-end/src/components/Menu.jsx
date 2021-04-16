// Libraries
import { Link } from "react-router-dom";

// Components
import TextButton from "./TextButton";

// Stylesheet
import "./Menu.scss";

export default function Menu() {
  return (
    <section className="nav-menu">
      <Link to="/clinics">
        <ul>Clinical Visits</ul>
      </Link>
      <Link to="/labs">
        <ul>Lab Records</ul>
      </Link>
      <Link to="/medications">
        <ul>Medications</ul>
      </Link>
      <Link to="/vaccinations">
        <ul>Vaccinations</ul>
      </Link>
      <TextButton variant="contained" color="secondary" userAction>Log In</TextButton>
    </section>
  )
};