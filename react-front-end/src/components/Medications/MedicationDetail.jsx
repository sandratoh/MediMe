// Libraries
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import IconButton from "../IconButton";

// Material UI Components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Helpers
import { dataContext } from "../hooks/DataProvider";
import { findNameById } from "../../helpers/selectors";
import { formatDate } from "../../helpers/dateHelpers";

// Stylesheet
import "../Clinics/ClinicDetail.scss";

export default function MedicationDetail() {
  const {
    
    medications,
    doctors,
    medRecordsDetail,
    setMedRecordsEdit,
    deleteMedication,
  } = useContext(dataContext);

  // Manage redirect state based on axios call
  const [redirect, setRedirect] = useState(false);

  const medication = medications.find(
    (med) => med.id === medRecordsDetail
  );

  const onDelete = () => {
    deleteMedication().then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  const onEdit = () => setMedRecordsEdit(visit.id);

  return (
    <section className="clinic-detail">
      {redirect && <Redirect to="/clinics" />}
      <div className="clinics-list--icons">
        <Link to="/clinics">
          <ArrowBackIosIcon />
        </Link>
      </div>
      <h1 className="clinics-list--title">Clinical Visit Detail</h1>

      <div className="clinic-detail--container">
        <div className="clinic-detail--data">
          <h5 className="">Date:</h5>
          <p className="form-body">{formatDate(visit.date)}</p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Clinic:</h5>
          <p className="form-body">{findNameById(clinics, visit.clinic_id)}</p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Doctor:</h5>
          <p className="form-body">
            {findNameById(doctors, visit.referral_doctor_id)}
          </p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Reason for visit:</h5>
          <p className="form-body">{visit.reason_for_visit}</p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Doctor's diagnosis:</h5>
          <p className="form-body">{visit.doctor_diagnosis}</p>
        </div>
      </div>

      <div className="clinic-detail--user-action">
        <IconButton
          delete
          variant="outlined"
          color="secondary"
          onClick={onDelete}
        >
          Delete
        </IconButton>
        <Link to="/clinics/edit">
          <IconButton
            edit
            variant="contained"
            color="secondary"
            onClick={onEdit}
          >
            Edit
          </IconButton>
        </Link>
      </div>
    </section>
  );
};