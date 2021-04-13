import { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../hooks/DataProvider";
import IconButton from "../IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./ClinicDetail.scss";

const findClinicById = (clinics, id) => {
  let name;
  clinics.forEach((clinic) => {
    if (clinic.id === id) {
      name = clinic.name;
    }
  });
  return name;
};

const findDoctorById = (doctors, id) => {
  let name;
  doctors.forEach((doctor) => {
    if (doctor.id === id) {
      name = doctor.name;
    }
  });
  return name;
};

const formatDate = (visit) => {
  const dateData = visit.date;
  const date = new Date(dateData);

  return date.toDateString();
};

export default function ClinicDetail() {
  const { clinicalVisits, clinics, doctors, clinicalVisitDetail } = useContext(
    dataContext
  );

  console.log("clinical visits in card detail", clinicalVisits);
  console.log("clinics in card detail", clinics);
  console.log("doctors in card detail", doctors);

  const visitId = clinicalVisitDetail - 1;
  console.log("visitId", visitId);

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
            {clinicalVisits[visitId] && formatDate(clinicalVisits[visitId])}
          </p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Clinic:</h5>
          <p className="form-body">
            {clinics[visitId] &&
              findClinicById(clinics, clinicalVisits[visitId].clinic_id)}
          </p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Doctor:</h5>
          <p className="form-body">
            {clinicalVisits[visitId] &&
              clinics[visitId] &&
              doctors[visitId] &&
              findDoctorById(
                doctors,
                clinicalVisits[visitId].referral_doctor_id
              )}
          </p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Reason for visit:</h5>
          <p className="form-body">
            {clinicalVisits[visitId] &&
              clinicalVisits[visitId].reason_for_visit}
          </p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Doctor's diagnosis:</h5>
          <p className="form-body">
            {clinicalVisits[visitId] &&
              clinicalVisits[visitId].doctor_diagnosis}
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
