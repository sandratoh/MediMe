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
    pharmacies,
    medications,
    doctors,
    medDetail,
    setMedEdit,
    deleteMedication,
  } = useContext(dataContext);

  // Manage redirect state based on axios call
  const [redirect, setRedirect] = useState(false);

  const medication = medications.find(
    (med) => med.id === medDetail
  );

  const onDelete = () => {
    deleteMedication().then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  const onEdit = () => setMedEdit(medication.id);

  return (
    <section className="clinic-detail">
      {redirect && <Redirect to="/medications" />}
      <div className="clinics-list--icons">
        <Link to="/clinics">
          <ArrowBackIosIcon />
        </Link>
      </div>
      <h1 className="clinics-list--title">Medication Detail</h1>

      <div className="clinic-detail--container">
        <div className="clinic-detail--data">
          <h5 className="">Medication Name:</h5>
          <p className="form-body">{medication.name}</p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Nickname:</h5>
          <p className="form-body">{medication.nickname}</p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Date:</h5>
          <p className="form-body">{formatDate(medication.prescribed_date)}</p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Pharmacy:</h5>
          <p className="form-body">{findNameById(pharmacies, medication.pharmacy_id)}</p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Prescibed Doctor:</h5>
          <p className="form-body">{findNameById(doctors, medication.prescribed_doctor_id)}</p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Refills Remaining:</h5>
          <p className="form-body">{medication.refills_remaining}</p>
        </div>

        <div className="clinic-detail--data">
          <h5 className="form-label">Instructions:</h5>
          <p className="form-body">{medication.instructions}</p>
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
        <Link to="/medications/edit">
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