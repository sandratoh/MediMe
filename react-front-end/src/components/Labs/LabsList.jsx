import { Link } from "react-router-dom";
import LabsCardList from "./LabsCardList";
import IconButton from "../IconButton";
import BackButton from "../BackButton";

import "./LabsList.scss";

export default function LabsList(props) {
  return (
    <section className="labs-list">
      <div className="labs-list--icons">
        <BackButton />
        <IconButton new color="secondary" variant="contained">
          <Link to="/labs/new">New</Link>
        </IconButton>
      </div>
      <h1 className="labs-list--title">Lab Visits</h1>
      <div className="labs-list--content">
        <LabsCardList />
      </div>
    </section>
  );
}
