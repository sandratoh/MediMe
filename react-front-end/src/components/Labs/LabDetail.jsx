import { useContext } from "react";
import { dataContext } from "../hooks/DataProvider";
import IconButton from "../IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
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
  const { doctors, labRecordsDetail, labRecords, labs } = useContext(
    dataContext
  );

  const record = labRecords.find((record) => record.id === labRecordsDetail);

  const onDelete = () => {
    console.log("delete button clicked");
  };
  const onEdit = () => {
    console.log("edit button clicked");
  };

  return (
    <section className="lab-detail">
      <div className="labs-list--icons">
        <ArrowBackIosIcon />
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
