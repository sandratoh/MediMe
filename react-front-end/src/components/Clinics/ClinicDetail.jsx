import { Link } from "react-router-dom";
import IconButton from "../IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./ClinicDetail.scss";

const clinical_visits = [
  {
    id: 1,
    user_id: 1,
    clinic_id: 3,
    referral_doctor_id: 2,
    date: "2018-09-09T07:00:00.000Z",
    type_of_visit: "HOSPITAL",
    reason_for_visit: "Stomach pain and vomit",
    doctor_diagnosis: "Food poisoning",
  },
];

const clinics = [
  {id: 1, name: "Dr. Dodek Wenner Family Practice"},
  {id: 2, name: "Dr. Howard Liang S.H. Inc."},
  {id: 3, name: "Vancouver General Hospital"},
];

const findClinicById = (id) => {
    let name;
    clinics.forEach((clinic) => {
      if (clinic.id === id) {
        name = clinic.name;
      }
    });
    return name;
  };

const doctors = [
  {id: 1, name: "Dr. Gale Dodek-Wenner"},
  {id: 2, name: "Dr. Howard Liang"},
  {id: 3, name: "Dr. Gregory House"},
  {id: 4, name: "Dr. Sheldon Cooper"},
  {id: 5, name: "Dr. Drake Ramoray"},
  {id: 6, name: "Dr. Ross Geller"}
];

const findDoctorById = (id) => {
  let name;
  doctors.forEach((doctor) => {
    if (doctor.id === id) {
      name = doctor.name;
    }
  });
  return name;
};

const formatDate = (dateData) => {
  const date = new Date(dateData);

return date.toDateString();
};

export default function ClinicDetail(props) {

  const onDelete = () => {
    console.log("delete button clicked");
  };
  const onEdit = () => {
    console.log("edit button clicked");
  };

  return (

    <section className="clinic-detail">
      <div className="clinics-list--icons">
        <ArrowBackIosIcon />
      </div>
      <h1 className="clinics-list--title">Clinical Visit Detail</h1>

      <div className="clinic-detail--container">
        <div className="clinic-detail--data">
          <h5 className="">Date:</h5>
          <p className="form-body">{formatDate(clinical_visits[0].date)}</p>
        </div>
        
        <div className="clinic-detail--data">
          <h5 className="form-label">Clinic:</h5>
          <p className="form-body">{ findClinicById(clinical_visits[0].clinic_id)}</p>
        </div>
        
        <div className="clinic-detail--data">
          <h5 className="form-label">Doctor:</h5>
          <p className="form-body">{ findDoctorById(clinical_visits[0].referral_doctor_id)}</p>
        </div>
        
        <div className="clinic-detail--data">
          <h5 className="form-label">Reason for visit:</h5>
          <p className="form-body">{clinical_visits[0].reason_for_visit}</p>
        </div>
        
        <div className="clinic-detail--data">
          <h5 className="form-label">Doctor's diagnosis:</h5>
          <p className="form-body">{clinical_visits[0].doctor_diagnosis}</p>
        </div>
      </div>

      <div className="clinic-detail--user-action">
      <IconButton
            delete
            variant="outlined"
            color="secondary"
            onClick={() => onDelete()}
          >
            Delete
          </IconButton>
          <IconButton
            edit
            variant="contained"
            color="secondary"
            onClick={() => onEdit()}
          >
            Edit
          </IconButton>
      </div>

    </section>
  )

}