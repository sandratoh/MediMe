import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { dataContext } from "../hooks/DataProvider";

import IconButton from "../IconButton";
import BackButton from "../BackButton";
import "./LabDetail.scss";

const findLabById = (labs, id) => {
  let name;
  labs.forEach((lab) => {
    if (lab.id === id) {
      name = lab.name;
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

const formatDate = (record) => {
  const dateData = record.date;
  const date = new Date(dateData);

  return date.toDateString();
};

export default function LabDetail() {
  const {
    doctors,
    labRecordsDetail,
    labRecords,
    labs,
    handleLabEditClick,
    deleteLabRecord,
  } = useContext(dataContext);

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  const record = labRecords.find((record) => record.id === labRecordsDetail);

  const onDelete = () => {
    deleteLabRecord().then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="lab-detail">
      {redirect && <Redirect to="/labs" />}
      <div className="labs-list--icons">
        <BackButton />
      </div>
      <h1 className="labs-list--title">Lab Record Detail</h1>

      <div className="lab-detail--container">
        <div className="lab-detail--data">
          <h5 className="">Date:</h5>
          <p className="form-body">{record && formatDate(record)}</p>
        </div>

        <div className="lab-detail--data">
          <h5 className="form-label">Lab:</h5>
          <p className="form-body">
            {record && findLabById(labs, record.lab_id)}
          </p>
        </div>

        {/* need to pull from drop down */}
        <div className="lab-detail--data">
          <h5 className="form-label">Type of test:</h5>
          <p className="form-body">{record && record.type_of_test}</p>
        </div>

        <div className="lab-detail--data">
          <h5 className="form-label">Doctor:</h5>
          <p className="form-body">
            {record && findDoctorById(doctors, record.referral_doctor_id)}
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
            onClick={() => handleLabEditClick(record.id)}
          >
            Edit
          </IconButton>
        </Link>
      </div>
    </section>
  );
}
