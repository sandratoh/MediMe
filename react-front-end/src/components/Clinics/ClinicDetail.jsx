import { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../hooks/DataProvider";
import IconButton from "../IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./ClinicDetail.scss";

// const clinical_visits = [
//   {
//     id: 1,
//     user_id: 1,
//     clinic_id: 3,
//     referral_doctor_id: 2,
//     date: "2018-09-09T07:00:00.000Z",
//     type_of_visit: "HOSPITAL",
//     reason_for_visit: "Stomach pain and vomit",
//     doctor_diagnosis: "Food poisoning",
//   },
// ];

// const clinics = [
//   { id: 1, name: "Dr. Dodek Wenner Family Practice" },
//   { id: 2, name: "Dr. Howard Liang S.H. Inc." },
//   { id: 3, name: "Vancouver General Hospital" },
// ];

const findClinicById = (clinics, id) => {
  let name;
  clinics.forEach((clinic) => {
    if (clinic.id === id) {
      name = clinic.name;
    }
  });
  return name;
};

// const doctors = [
//   { id: 1, name: "Dr. Gale Dodek-Wenner" },
//   { id: 2, name: "Dr. Howard Liang" },
//   { id: 3, name: "Dr. Gregory House" },
//   { id: 4, name: "Dr. Sheldon Cooper" },
//   { id: 5, name: "Dr. Drake Ramoray" },
//   { id: 6, name: "Dr. Ross Geller" },
// ];

const findDoctorById = (doctors, id) => {
  let name;
  doctors.forEach((doctor) => {
    if (doctor.id === id) {
      name = doctor.name;
    }
  });
  return name;
};

// get clinical visit id
// use visit record to find date
// format it

const formatDate = (visit) => {
  const dateData = visit.date;
  const date = new Date(dateData);

  return date.toDateString();
};

export default function ClinicDetail() {
  const { clinicalVisits, clinics, doctors } = useContext(dataContext);

  console.log("clinical visits in card detail", clinicalVisits);
  console.log("clinics in card detail", clinics);
  console.log("doctors in card detail", doctors);

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
          <p className="form-body">
            {clinicalVisits[1] && formatDate(clinicalVisits[1])}
          </p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Clinic:</h5>
          <p className="form-body">
            {clinics[1] && findClinicById(clinics, clinicalVisits[1].clinic_id)}
          </p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Doctor:</h5>
          <p className="form-body">
            {clinicalVisits[1] &&
              clinics[1] &&
              doctors[1] &&
              findDoctorById(doctors, clinicalVisits[1].referral_doctor_id)}
          </p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Reason for visit:</h5>
          <p className="form-body">
            {clinicalVisits[1] && clinicalVisits[1].reason_for_visit}
          </p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Doctor's diagnosis:</h5>
          <p className="form-body">
            {clinicalVisits[1] && clinicalVisits[1].doctor_diagnosis}
          </p>
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
  );
}
