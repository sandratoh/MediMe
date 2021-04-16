// Libraries
import { Link } from "react-router-dom";
import { useContext } from "react";

// Helpers
import { dataContext } from "./hooks/DataProvider";
// Components
import TextButton from "./TextButton";

// Stylesheet
import "./Menu.scss";

export default function Menu() {
  const { setMenu } = useContext(dataContext);

  return (
    <section className="nav-menu">
      <div className="nav-menu--heading">
        <Link to="/clinics">
          <ul onClick={() => setMenu(false)}>Clinical Visits</ul>
        </Link>
        <Link to="/labs">
          <ul onClick={() => setMenu(false)}>Lab Records</ul>
        </Link>
        <Link to="/medications">
          <ul onClick={() => setMenu(false)}>Medications</ul>
        </Link>
        <Link to="/vaccinations">
          <ul onClick={() => setMenu(false)}>Vaccinations</ul>
        </Link>
      </div>
      <div className="nav-menu--button">
        <TextButton color="secondary" userAction>Log In</TextButton>
      </div>
    </section>
  )
};