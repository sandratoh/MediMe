// Libraries
import { useContext } from "react";

// Material UI Components
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Components
import DoseCard from "./Doses/DoseCard";
import IconButton from "../IconButton";

// Helpers
import { dataContext } from "../hooks/DataProvider";

// Stylesheet
import "../../styles/card.scss";

export default function VaccinationCard(props) {
  const { setDoseDetail } = useContext(dataContext);

  console.log("props doses:", props.doses);

  return (
    <div className="card--vaccination">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle1">{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails className="card--vaccination--doses">
          {props.doses.map((dose, index) => (
            <DoseCard
              current={index + 1}
              total={props.doses.length}
              date_taken={dose.date_taken}
              onClick={() => setDoseDetail(dose.id)}
            ></DoseCard>
          ))}
        </AccordionDetails>
        <IconButton newDose variant="contained" color="primary">
          New Dose
        </IconButton>
      </Accordion>
    </div>
  );
}
