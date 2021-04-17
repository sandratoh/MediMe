// Material UI Components
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

// Icons
import emptyIcon from "../../images/empty-meds.png";
import fullIcon from "../../images/full-meds.png";

// Helpers
import { formatDate } from "../../helpers/dateHelpers";

// Stylesheet
import "../../styles/card.scss";

export default function MedicationCard(props) {
  const iconByRefills = (refills) => (refills >= 1 ? fullIcon : emptyIcon);

  return (
    <Card className="card" variant="outlined" onClick={props.onClick}>
      <div className="card--details">
        <Typography variant="subtitle1" color="textSecondary">
          {formatDate(props.date)}
        </Typography>
        <Typography variant="subtitle1">{props.value}</Typography>
        <Typography variant="subtitle1">{props.nickName}</Typography>
      </div>
      <div className="card--icon">
        <img
          src={iconByRefills(props.refills)}
          component="img"
          alt="card icon"
        />
      </div>
    </Card>
  );
}
