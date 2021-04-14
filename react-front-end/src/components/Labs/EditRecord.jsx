import { useState, useContext } from "react";
import { Redirect } from "react-router";
import { dataContext } from "../hooks/DataProvider";

import TextInput from "../TextInput";
import DateInput from "../DateInput";
import IconButton from "../IconButton";
import LabRecordType from "./LabsDropdown";

import BackButton from "../BackButton";
import "./Record.scss";

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

export default function EditRecord() {
  const {
    labRecords,
    labs,
    doctors,
    labRecordsEdit,
    editLabRecord,
  } = useContext(dataContext);
  const record = labRecords.find((record) => record.id === labRecordsEdit);

  const [date, setDate] = useState(record.date);
  const [lab, setLab] = useState(findLabById(labs, record.lab_id));
  const [recordType, setRecordType] = useState(record.type_of_test);
  const [doctor, setDoctor] = useState(
    findDoctorById(doctors, record.referral_doctor_id)
  );

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  const onCancel = () => setRedirect(true);

  const onSave = () => {
    const labDetail = {
      user_id: 1,
      date,
      referral_doctor_id: doctor,
      lab_id: lab,
      type_of_test: recordType,
    };

    editLabRecord(labDetail).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="lab-new">
      {redirect && <Redirect to="/labs/view" />}
      <div className="labs-list--icons">
        <BackButton />
      </div>
      <h1 className="labs-list--title">Update Lab Record</h1>
      <div className="lab-form--container">
        <div className="lab-form--field">
          <DateInput date={date} setInput={setDate}>
            Date:
          </DateInput>
          <TextInput required value={lab} setInput={setLab}>
            Lab:
          </TextInput>
          <LabRecordType required value={recordType} setInput={setRecordType} />
          <TextInput required value={doctor} setInput={setDoctor}>
            Referral Doctor:
          </TextInput>
        </div>
        <div className="lab-form--user-action">
          <IconButton
            cancel
            variant="outlined"
            color="secondary"
            onClick={onCancel}
          >
            Cancel
          </IconButton>
          <IconButton
            save
            variant="contained"
            color="secondary"
            onClick={onSave}
          >
            Save
          </IconButton>
        </div>
      </div>
    </section>
  );
}
