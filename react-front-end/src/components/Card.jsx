import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import hospitalIcon from "../images/hospital.png";
import clinicIcon from "../images/clinic.png";
import "./Card.scss";

export default function CardListItem(props) {
  const iconByType = (props) => {
    const visitType = props.type.toUpperCase();

    return visitType === "HOSPITAL" ? hospitalIcon : clinicIcon;
  };

  const formatDate = (props) => {
    const date = new Date(props.date);

    return date.toDateString();
  };

  return (
    <Card className="card" variant="outlined">
      <div className="card--details">
        <Typography variant="subtitle1" color="textSecondary">
          {formatDate(props)}
        </Typography>
        <Typography variant="subtitle1">{props.children}</Typography>
      </div>
      <div className="card--icon">
        <img src={iconByType(props)} component="img" alt="card icon" />
      </div>
    </Card>
  );
}
