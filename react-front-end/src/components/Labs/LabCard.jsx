// Material UI Components
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

// Icons
import bloodIcon from "../../images/blood.png";
import mammogramIcon from "../../images/mammogram.png";
import mriIcon from "../../images/mri.png";
import ultrasoundIcon from "../../images/ultrasound.png";
import urineIcon from "../../images/urine.png";
import xrayIcon from "../../images/x-ray.png";

// Helpers
import { findNameById } from "../../helpers/selectors";
import { formatDate } from "../../helpers/dateHelpers";

// Stylesheet
import "../../styles/card.scss";

export default function CardListItem(props) {
  const iconByType = type => {
    switch (type) {
      case "BLOOD": return bloodIcon
      case "MAMMOGRAM": return mammogramIcon;
      case "MRI": return mriIcon;
      case "ULTRASOUND": return ultrasoundIcon;
      case "URINE": return urineIcon;
      case "XRAY": return xrayIcon;
      default: console.log("Lab type not supported.")
    }
  };

  return (
    <Card className="card" variant="outlined" onClick={props.onClick}>
      <div className="card--details">
        <Typography variant="subtitle1" color="textSecondary">
          {formatDate(props.date)}
        </Typography>
        <Typography variant="subtitle1">{findNameById(props.labs, props.value)}</Typography>
      </div>
      <div className="card--icon">
        <img src={iconByType(props.type)} component="img" alt="card icon" />
      </div>
    </Card>
  );
}
