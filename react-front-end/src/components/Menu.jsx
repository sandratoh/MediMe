// Libraries
import { Link } from "react-router-dom";
import { useContext } from "react";

// Helpers
import { dataContext } from "./Provider/DataProvider";
// Components
import TextButton from "./TextButton";

// Stylesheet
import "./Menu.scss";

export default function Menu() {
  const { setMenu, setUserDetailId } = useContext(dataContext);

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
        <Link to="/">
          <TextButton
            color="secondary"
            userAction
            onClick={() => setUserDetailId(null)}
          >
            Log Out
          </TextButton>
        </Link>
      </div>
    </section>
  );
}
