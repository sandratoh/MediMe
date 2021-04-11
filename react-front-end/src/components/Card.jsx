import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import hospitalIcon from "../images/hospital.png";
import clinicIcon from "../images/clinic.png";
import "./Card.scss";

const clinics = [
  {
    id: 1,
    name: "Dr. Dodek Wenner Family Practice",
  },
  {
    id: 2,
    name: "Dr. Howard Liang S.H. Inc.",
  },
  {
    id: 3,
    name: "Vancouver General Hospital",
  },
];

export default function CardListItem(props) {
  const iconByType = (props) => {
    const visitType = props.type.toUpperCase();

    return visitType === "HOSPITAL" ? hospitalIcon : clinicIcon;
  };

  const formatDate = (props) => {
    const date = new Date(props.date);

    return date.toDateString();
  };

  const findClinicById = (props) => {
    let name;
    clinics.forEach((clinic) => {
      if (clinic.id === props.value) {
        // console.log("clinic", clinic);
        // console.log("clinic name", clinic.name);

        name = clinic.name;
      }
    });
    return name;
  };

  return (
    <Card className="card" variant="outlined">
      <div className="card--details">
        <Typography variant="subtitle1" color="textSecondary">
          {formatDate(props)}
        </Typography>
        <Typography variant="subtitle1">{findClinicById(props)}</Typography>
      </div>
      <div className="card--icon">
        <img src={iconByType(props)} component="img" alt="card icon" />
      </div>
    </Card>
  );
}
