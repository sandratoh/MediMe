import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import "../../../styles/card.scss";

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

export default function DoseCard(props) {
  const formatDate = (props) => {
    const date = new Date(props.date_taken);

    return date.toDateString();
  };

  console.log("props:", props);
  console.log("props date_taken:", props.date_taken);

  return (
    <Card className="card--dose" variant="outlined">
      <div className="card--details">
        <Typography variant="subtitle2" color="textSecondary">
          {`Dose ${props.current}/${props.total}`}
        </Typography>
      </div>
      <div className="card--details">
        <Typography variant="subtitle2" color="textSecondary">
          {formatDate(props)}
        </Typography>
      </div>
    </Card>
  );
}
