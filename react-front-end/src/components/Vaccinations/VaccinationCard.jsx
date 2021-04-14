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
import VaccinationsCardList from "./VaccinationsCardList";

// Helpers
import { dataContext } from "../hooks/DataProvider";
import { findNameById } from "../../helpers/selectors";

// Stylesheet
import "../../styles/card.scss";

// // Test data
// const vaccinations = [
//   {
//     id: 1,
//     user_id: 1,
//     name: "Pfizer-BioNTech COVID-19",
//     total_num_doses: 2,
//   },
//   {
//     id: 2,
//     user_id: 1,
//     name: "MMR Priorix",
//     total_num_doses: 2,
//   },
// ];

// const doses = [
//   {
//     id: 1,
//     vaccination_id: 1,
//     serial_number: "SB22S987NOW",
//     date_taken: "2021-03-15T07:00:00.000Z",
//     administration_site: "Sunset Community Centre",
//     next_scheduled_dose: "2021-09-01T07:00:00.000Z",
//   },
//   {
//     id: 2,
//     vaccination_id: 2,
//     serial_number: "AS8D7XX2LZK",
//     date_taken: "2020-05-29T07:00:00.000Z",
//     administration_site: "Cross Walk-In Clinic",
//     next_scheduled_dose: null,
//   },
//   {
//     id: 3,
//     vaccination_id: 2,
//     serial_number: "KS3K9XZLZLK",
//     date_taken: "2019-12-18T08:00:00.000Z",
//     administration_site: "Safeway Pharmacy at Granville",
//     next_scheduled_dose: "2020-05-29T07:00:00.000Z",
//   },
// ];

// const vaccinations = [
//   {
//     id: 7,
//     user_id: 1,
//     name: "Happy Shot",
//     total_num_doses: 5,
//   },
// ];

// const dosesForHappyShot = [
//   {
//     id: 14,
//     vaccination_id: 7,
//     serial_number: "00000000",
//     date_taken: "2021-04-01T07:00:00.000Z",
//     administration_site: "Vancouver General Hospital",
//     next_scheduled_dose: "2021-04-02T07:00:00.000Z",
//   },
//   {
//     id: 15,
//     vaccination_id: 7,
//     serial_number: "00000001",
//     date_taken: "2021-04-02T07:00:00.000Z",
//     administration_site: "Vancouver General Hospital",
//     next_scheduled_dose: "2021-04-03T07:00:00.000Z",
//   },
// ];

export default function VaccinationCard(props) {
  const { doses, vaccinations, vaccinationDetail } = useContext(dataContext);

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
          {doses.map((dose, index) => (
            <DoseCard
              current={index + 1}
              total={doses.length}
              date_taken={dose.date_taken}
            ></DoseCard>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
