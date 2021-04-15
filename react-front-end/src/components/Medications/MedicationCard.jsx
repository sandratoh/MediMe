// Components
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";


// Helpers
//might not need this one?
// import { findNameById } from "../../helpers/selectors";
import { formatDate } from "../../helpers/dateHelpers";

// Stylesheet
import "../../styles/card.scss";

export default function MedicationCard(props) {
  // icon shows when refills > 0 ??? 
  // const iconByType = (props) => {
  //   const visitType = props.type.toUpperCase();

  //   return visitType === "HOSPITAL" ? hospitalIcon : clinicIcon;
  // };
  return (
    <Card className="card" variant="outlined" onClick={props.onClick}>
      <div className="card--details">
        <Typography variant="subtitle1" color="textSecondary">
          {formatDate(props.date)}
        </Typography>
        <Typography variant="subtitle1">
          {props.value}
        </Typography>
        <Typography variant="subtitle1">
          {props.nickName}
        </Typography>
      </div>
      <div className="card--icon">
        {/* <img src={iconByType(props)} component="img" alt="card icon" /> */}
      </div>
    </Card>
  );
}