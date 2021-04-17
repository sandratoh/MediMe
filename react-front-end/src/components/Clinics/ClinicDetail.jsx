// Libraries
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import IconButton from "../IconButton";

// Material UI Components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Helpers
import { dataContext } from "../Provider/DataProvider";
import { clinicContext } from "../Provider/ClinicContext";
import { findNameById } from "../../helpers/selectors";
import { formatDate } from "../../helpers/dateHelpers";

// Stylesheet
import "./ClinicDetail.scss";

export default function ClinicDetail() {
  const {
    clinicalVisits,
    clinics,
    clinicalVisitDetailId,
    setClinicalVisitEditId,
    deleteClinicVisit,
  } = useContext(clinicContext);

  const { doctors } = useContext(dataContext);

  // Manage redirect state based on axios call
  const [redirect, setRedirect] = useState(false);

  const visit = clinicalVisits.find(
    (visit) => visit.id === clinicalVisitDetailId
  );

  const onDelete = () => {
    deleteClinicVisit().then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  const onEdit = () => setClinicalVisitEditId(visit.id);

  const emptyDataPrompt = "No data entered yet";

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
          <p className="form-body">{findNameById(doctors, visit.doctor_id)}</p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Reason for visit:</h5>
          {visit.reason_for_visit ? (
            <p className="form-body">{visit.reason_for_visit}</p>
          ) : (
            <p className="form-body empty-data">{emptyDataPrompt}</p>
          )}
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Doctor's diagnosis:</h5>
          {visit.doctor_diagnosis ? (
            <p className="form-body">{visit.doctor_diagnosis}</p>
          ) : (
            <p className="form-body empty-data">{emptyDataPrompt}</p>
          )}
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
}
