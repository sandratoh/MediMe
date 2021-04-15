// Libraries
import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

// Components
import DateInput from "../DateInput";
import IconButton from "../IconButton";
import LabRecordType from "./LabsDropdown";
import TextInput from "../TextInput";

// Helpers
import { currentDate } from "../../helpers/dateHelpers";
import { dataContext } from "../hooks/DataProvider";

// Stylesheet
import "../../styles/form.scss";

export default function NewRecord() {
  const { addLabRecord } = useContext(dataContext);

  const [date, setDate] = useState(currentDate());
  const [lab, setLab] = useState("");
  const [recordType, setRecordType] = useState("");
  const [doctor, setDoctor] = useState("");

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

    addLabRecord(labDetail).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="labs-new">
      {redirect && <Redirect to="/labs" />}
      <h1 className="labs-list--title">New Lab Record</h1>
      <div className="labs-form--container">
        <div className="labs-form--field">
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
