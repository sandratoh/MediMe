import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import "../../../styles/card.scss";

export default function DoseCard(props) {
  const formatDate = (props) => {
    const date = new Date(props.date_taken);

    return date.toDateString();
  };

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
