import { Link } from "react-router-dom";
import BackButton from "../../BackButton";
import IconButton from "../../IconButton";
import "./DoseDetail.scss";


export default function DoseDetail() {
  const onDelete = () => {
    console.log('Delete button pressed');
  };

  const onEdit = () => {
    console.log('Edit button pressed');
  };

  return (
    <section className="dose-detail">
      <div className="dose-detail--icons">
        <BackButton />
      </div>
      <h1 className="dose-detail--title">Vaccination Dose Detail</h1>

      <div className="dose-detail--container">
        <div className="dose-detail--data">
          <h5 className="form-label">Vaccination Name:</h5>
          <p className="form-body">
            Pfizer-BioNTech COVID-19
          </p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">Date:</h5>
          <p className="form-body">March 4, 2021</p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">Administration Site:</h5>
          <p className="form-body">Olympic Village Green Clinic</p>
        </div>
        <div className="dose-detail--data">
          <h5 className="">Next Scheduled Dose:</h5>
          <p className="form-body">June 4, 2021</p>
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