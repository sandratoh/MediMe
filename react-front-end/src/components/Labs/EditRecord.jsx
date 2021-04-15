// Libraries
import { useState, useContext } from "react";
import { Redirect } from "react-router";

// Components
import TextInput from "../TextInput";
import DateInput from "../DateInput";
import IconButton from "../IconButton";
import LabRecordType from "./LabsDropdown";

// Helpers
import { dataContext } from "../hooks/DataProvider";
import { findNameById } from "../../helpers/selectors";

// Stylesheet
import "../../styles/form.scss";

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
  const [lab, setLab] = useState(findNameById(labs, record.lab_id));
  const [recordType, setRecordType] = useState(record.type_of_test);
  const [doctor, setDoctor] = useState(
    findNameById(doctors, record.referral_doctor_id)
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
    <section className="labs-edit">
      {redirect && <Redirect to="/labs/view" />}
      <h1 className="labs-list--title">Update Lab Record</h1>
      <div className="labs-form--container">
        <div className="labs-form--field">
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
        <div className="labs-form--user-action">
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
