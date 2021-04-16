// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Material UI Components
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

// Components
import DoseCard from "./Doses/DoseCard";
import IconButton from "../IconButton";

// Helpers
import { dataContext } from "../hooks/DataProvider";

// Stylesheet
import "../../styles/card.scss";

export default function VaccinationCard(props) {
  const { setDoseDetailId } = useContext(dataContext);

  return (
    <div className="card--vaccination">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {props.total > props.doses.length ? (
            <h4 variant="subtitle1">
              <ErrorOutlineIcon
                className="card--vaccination--icon"
                color="error"
                fontSize="default"
              />
              {props.name}
            </h4>
          ) : (
            <h4 className="card--vaccination--name" variant="subtitle1">
              {props.name}
            </h4>
          )}
        </AccordionSummary>
        <AccordionDetails
          className="card--vaccination--doses"
          onClick={props.onClick}
        >
          {props.doses.length > 0
            ? props.doses.map((dose, index) => (
            <Link to="/vaccinations/dose/view">
              <DoseCard
                current={index + 1}
                total={props.total}
                date_taken={dose.date_taken}
                onClick={() => setDoseDetailId(dose.id)}
              />
            </Link>
            ))
            : <p>No data entered yet.</p>
          }
        </AccordionDetails>
        <Link to="/vaccinations/dose/new">
          <IconButton
            newDose
            variant="contained"
            color="primary"
            onClick={props.onClick}
          >
            New Dose
          </IconButton>
        </Link>
      </Accordion>
    </div>
  );
}
