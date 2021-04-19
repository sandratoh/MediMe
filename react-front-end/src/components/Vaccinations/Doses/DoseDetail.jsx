// Libraries
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import IconButton from "../../IconButton";

// Material UI Components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Helpers
import { dataContext } from "../../Provider/DataProvider";
import { findNameById } from "../../../helpers/selectors";
import { formatDate } from "../../../helpers/dateHelpers";

// Stylesheet
import "./DoseDetail.scss";

export default function DoseDetail() {
  const {
    doses,
    vaccinationDetailId,
    doseDetailId,
    vaccinations,
    deleteDoseRecord,
    setDoseEditId,
  } = useContext(dataContext);
  const [redirect, setRedirect] = useState(false);

  const dose = doses.find((d) => d.id === doseDetailId);

  const onDelete = () => {
    deleteDoseRecord().then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  const onEdit = () => setDoseEditId(dose.id);

  return (
    <section className="dose-detail">
      {redirect && <Redirect to="/vaccinations" />}
      <div className="dose-detail--icons">
        <Link to="/vaccinations" data-testid="back-button">
          <ArrowBackIosIcon />
        </Link>
      </div>
      <h1 className="dose-detail--title">Vaccination Dose Detail</h1>

      <div className="dose-detail--container">
        <div className="dose-detail--data">
          <h5 className="form-label">Vaccination Name:</h5>
          <p className="form-body">
            {findNameById(vaccinations, vaccinationDetailId)}
          </p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">Date Taken:</h5>
          <p className="form-body">{formatDate(dose.date_taken)}</p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">Serial Number</h5>
          <p className="form-body">{dose.serial_number}</p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">Administration Site:</h5>
          <p className="form-body">{dose.administration_site}</p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">Next Scheduled Dose:</h5>
          {dose.next_scheduled_dose ? (
            <p className="form-body">{formatDate(dose.next_scheduled_dose)}</p>
          ) : (
            <p className="form-body empty-data">{"No data entered yet"}</p>
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
        <Link to="/vaccinations/dose/edit">
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
