// Libraries
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import IconButton from "../../IconButton";

// Material UI Components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Helpers
import { findNameById } from "../../../helpers/selectors";
import { formatDate } from "../../../helpers/dateHelpers";

// Stylesheet
import "./DoseDetail.scss";
import { dataContext } from "../../hooks/DataProvider";

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
        <Link to="/vaccinations">
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
          <h5 className="">Date:</h5>
          <p className="form-body">{formatDate(dose.date_taken)}</p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">Administration Site:</h5>
          <p className="form-body">{dose.administration_site}</p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">
            {dose.next_scheduled_dose
              ? "Next Scheduled Dose:"
              : "No Future Dose Scheduled."}
          </h5>
          <p className="form-body">{dose.next_scheduled_dose && formatDate(dose.next_scheduled_dose)}</p>
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
