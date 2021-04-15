// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

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
  const { setDoseDetail, setVaccinationDetail, vaccinationDetail } = useContext(
    dataContext
  );

  console.log(
    "props from vaccination card, passed from vaccinations card list",
    props
  );

  console.log("props.onClick function", props.onClick);

  return (
    <div className="card--vaccination">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          // onClick={props.onClick}
        >
          <Typography variant="subtitle1">{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails className="card--vaccination--doses">
          {props.doses.map((dose, index) => (
            <DoseCard
              current={index + 1}
              total={props.total}
              date_taken={dose.date_taken}
              onClick={() => setDoseDetail(dose.id)}
            ></DoseCard>
          ))}
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

//   () => setVaccinationDetail(props.vaccineId),
//   console.log(
//     "vaccination detail from newdose button",
//     vaccinationDetail
//   )
// )}
