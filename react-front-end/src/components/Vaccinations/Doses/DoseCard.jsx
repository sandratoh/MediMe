import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import "../../../styles/card.scss";

export default function DoseCard() {
  return (
    <Card className="card--dose" variant="outlined">
      <div className="card--details">
        <Typography variant="subtitle1" color="textSecondary">
          Dose #/#
        </Typography>
      </div>
      <div className="card--details">
        <Typography variant="subtitle1" color="textSecondary">
          Sun Apr 12 2021
        </Typography>
      </div>
    </Card>
  );
}
