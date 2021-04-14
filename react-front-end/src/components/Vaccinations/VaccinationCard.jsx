import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DoseCard from "./Doses/DoseCard";

import "../../styles/card.scss";

export default function SimpleAccordion() {
  return (
    <div className="card--vaccination">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Vaccination</Typography>
        </AccordionSummary>
        <AccordionDetails className="card--vaccination--doses">
          <DoseCard />
          <DoseCard />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
