// Libraries
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import IconButton from "../IconButton";

// Material UI Components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Helpers
import { dataContext } from "../Provider/DataProvider";
import { findNameById } from "../../helpers/selectors";
import { formatDate } from "../../helpers/dateHelpers";

// Stylesheet
import "./LabDetail.scss";

export default function LabDetail() {
  const {
    doctors,
    labRecordDetailId,
    labRecords,
    labs,
    deleteLabRecord,
    setLabRecordEditId,
  } = useContext(dataContext);

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  const record = labRecords.find((record) => record.id === labRecordDetailId);

  const onDelete = () => {
    deleteLabRecord().then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  const onEdit = () => setLabRecordEditId(record.id);

  return (
    <section className="lab-detail">
      {redirect && <Redirect to="/labs" />}
      <div className="labs-list--icons">
        <span className="back-button">
          <Link to="/labs">
            <ArrowBackIosIcon />
          </Link>
        </span>
      </div>
      <h1 className="labs-list--title">Lab Record Detail</h1>

      <div className="lab-detail--container">
        <div className="lab-detail--data">
          <h5 className="">Date:</h5>
          <p className="form-body">{formatDate(record.date)}</p>
        </div>

        <div className="lab-detail--data">
          <h5 className="form-label">Lab:</h5>
          <p className="form-body">{findNameById(labs, record.lab_id)}</p>
        </div>

        {/* need to pull from drop down */}
        <div className="lab-detail--data">
          <h5 className="form-label">Type of test:</h5>
          <p className="form-body">{record.type_of_test}</p>
        </div>

        <div className="lab-detail--data">
          <h5 className="form-label">Doctor:</h5>
          <p className="form-body">
            {findNameById(doctors, record.referral_doctor_id)}
          </p>
        </div>
      </div>

      <div className="lab-detail--user-action">
        <IconButton
          delete
          variant="outlined"
          color="secondary"
          onClick={onDelete}
        >
          Delete
        </IconButton>
        <Link to="/labs/edit">
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
