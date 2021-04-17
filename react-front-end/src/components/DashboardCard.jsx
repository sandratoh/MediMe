// Material UI Components
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

// Icons
import clinicRecordIcon from "../images/clinic-records.png";
import labRecordIcon from "../images/lab-records.png";
import medicationsIcon from "../images/medicine.png";
import vaccinationIcon from "../images/vaccination.png";

// Stylesheet
import "./DashboardCard.scss";

export default function DashboardCard(props) {
  const iconByCategory = (category) => {
    switch (category) {
      case "clinics":
        return clinicRecordIcon;
      case "labs":
        return labRecordIcon;
      case "vaccinations":
        return vaccinationIcon;
      case "medications":
        return medicationsIcon;
      default:
        console.log("Category not supported.");
    }
  };

  return (
    <Card className="dashboard-card">
      <div className="dashboard-card--detail">
        <img
          className="dashboard-card--icon"
          src={iconByCategory(props.category)}
          component="img"
          alt="card icon"
        />
        <Typography className="dashboard-card--category" variant="subtitle1">
          {props.children}
        </Typography>
      </div>
    </Card>
  );
}
