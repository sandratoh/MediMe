import { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router";

import TextInput from "../TextInput";
import DateInput, { currentDate } from "../DateInput";
import IconButton from "../IconButton";
import LabRecordType from "./LabsDropdown";
import { dataContext } from "../hooks/DataProvider";

import BackButton from "../BackButton";
import "./Record.scss";

export default function NewRecord() {
  const { addLabRecord } = useContext(dataContext);

  const [date, setDate] = useState(currentDate());
  const [lab, setLab] = useState("");
  const [recordType, setRecordType] = useState("");
  const [doctor, setDoctor] = useState("");

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  // Use react router hook to go back to prev history
  const history = useHistory();
  const onCancel = () => history.goBack();

  const onSave = () => {
    const labDetail = {
      user_id: 1,
      date,
      referral_doctor_id: doctor,
      lab_id: lab,
      type_of_test: recordType,
    };

    addLabRecord(labDetail).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="lab-new">
      {redirect && <Redirect to="/labs" />}
      <div className="labs-list--icons">
        <BackButton />
      </div>
      <h1 className="labs-list--title">New Lab Record</h1>
      <div className="lab-form--container">
        <div className="lab-form--field">
          <DateInput value={date} setInput={setDate}>
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
