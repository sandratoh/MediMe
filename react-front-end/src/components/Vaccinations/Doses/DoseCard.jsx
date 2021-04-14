// Material UI Components
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

// Helpers
import { formatDate } from "../../../helpers/dateHelpers";

// Stylesheet
import "../../../styles/card.scss";

export default function DoseCard(props) {

  return (
    <Card className="card--dose" variant="outlined">
      <div className="card--details">
        <Typography variant="subtitle2" color="textSecondary">
          {`Dose ${props.current}/${props.total}`}
        </Typography>
      </div>
      <div className="card--details">
        <Typography variant="subtitle2" color="textSecondary">
          {formatDate(props.date_taken)}
        </Typography>
      </div>
    </Card>
  );
}
