import "./DashboardCard.scss";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import clinicRecordIcon from '../images/clinic-records.png';
import labRecordIcon from '../images/lab-records.png';
import vaccinationIcon from '../images/vaccination.png';
import medicationsIcon from '../images/medicine.png';

export default function DashboardCard(props) {
  const iconByCategory = (category) => {
    switch (category) {
      case "clinics":
        return clinicRecordIcon;
        break;
      case "labs":
        return labRecordIcon;
        break;
      case "vaccinations":
        return vaccinationIcon;
        break;
      case "medications":
        return medicationsIcon;
        break;
    };
  };

  return (
    <Card
      className="dashboard-card"
    >
      <div className="dashboard-card--detail">
      <img className="dashboard-card--icon" src={iconByCategory(props.category)} component="img" alt="card icon"/>
      <Typography className="dashboard-card--category" variant="p">{props.children}</Typography>
      </div>
    </Card>
  )
}