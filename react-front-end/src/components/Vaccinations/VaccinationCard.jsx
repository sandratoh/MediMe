// Material UI Components
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Components
import DoseCard from "./Doses/DoseCard";

// Helpers
import { findNameById } from "../../helpers/selectors";

// Stylesheet
import "../../styles/card.scss";

const vaccinations = [
  {
    id: 7,
    user_id: 1,
    name: "Happy Shot",
    total_num_doses: 5,
  },
];

const dosesForHappyShot = [
  {
    id: 14,
    vaccination_id: 7,
    serial_number: "00000000",
    date_taken: "2021-04-01T07:00:00.000Z",
    administration_site: "Vancouver General Hospital",
    next_scheduled_dose: "2021-04-02T07:00:00.000Z",
  },
  {
    id: 15,
    vaccination_id: 7,
    serial_number: "00000001",
    date_taken: "2021-04-02T07:00:00.000Z",
    administration_site: "Vancouver General Hospital",
    next_scheduled_dose: "2021-04-03T07:00:00.000Z",
  },
];

export default function VaccinationCard() {
  return (
    <div className="card--vaccination">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle1">{findNameById(vaccinations, 7)}</Typography>
        </AccordionSummary>
        <AccordionDetails className="card--vaccination--doses">
          {dosesForHappyShot.map((dose, index) => (
            <DoseCard
              current={index + 1}
              total={dosesForHappyShot.length}
              date_taken={dose.date_taken}
            ></DoseCard>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
