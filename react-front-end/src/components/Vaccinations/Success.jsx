// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import TextButton from "../TextButton";
import checkIcon from "../../images/check-mark.png";

// Stylesheet
import "./Success.scss";

export default function Success() {
  return (
    <section className="vaccination-success">
      <h1 className="vaccination-success--title">Vaccination Record Saved!</h1>
      <div className="vaccination-success--icon">
        <img src={checkIcon} component="img" alt="check icon" />
      </div>
      <div className="vaccination-success--user-action">
        <Link to="/vaccinations/dose/new">
          <TextButton userAction color="secondary">
            Enter Dosage Info
          </TextButton>
        </Link>
        <Link to="/vaccinations" className="link-text">
          Skip for now
        </Link>
      </div>
    </section>
  );
}
