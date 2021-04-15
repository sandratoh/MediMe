// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

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
  const { allDoses, vaccinationDetail, doseDetail, vaccinations } = useContext(dataContext)
 
  const dose = allDoses.find(d => d.id === doseDetail);
  
  const onDelete = () => {
    console.log('Delete button pressed');
  };

  const onEdit = () => {
    console.log('Edit button pressed');
  };

  return (
    <section className="dose-detail">
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
            {findNameById(vaccinations, vaccinationDetail)}
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
          <h5 className="">{dose.next_scheduled_dose ? 'Next Scheduled Dose:' : 'No Future Dose Scheduled.'}</h5>
          <p className="form-body">{formatDate(dose.next_scheduled_dose)}</p>
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
        {/* <Link to="/dose/edit"> */}
          <IconButton
          edit
          variant="contained"
          color="secondary"
          onClick={onEdit}
          // onClick={() => handleDoseEditClick(dose.id)}
          >
          Edit
        </IconButton>
      {/* </Link> */}
      </div>
    </section>
  );
};