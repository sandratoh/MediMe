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
import { dataContext } from "../Provider/DataProvider";

// Stylesheet
import "../../styles/form.scss";

export default function NewRecord() {
  const { 
    addLabRecord, 
    labExists, 
    addLab, 
    doctorExists, 
    addDoctor 
  } = useContext(dataContext);

  const [date, setDate] = useState(currentDate());
  const [lab, setLab] = useState("");
  const [recordType, setRecordType] = useState("");
  const [doctor, setDoctor] = useState("");

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  // Validate form error state
  const [validate, setValidate] = useState(false);

  const onCancel = () => setRedirect(true);

  const onSave = () => {
    if (!date || lab === "" || doctor === "" || recordType === "") {
      return setValidate(true);
    };

    const labDetail = {
      user_id: 1,
      date,
      referral_doctor_id: doctor,
      lab_id: lab,
      type_of_test: recordType,
    };

    !labExists(lab) && addLab({ name: lab });

    !doctorExists(doctor) && addDoctor({ name: doctor });

    addLabRecord(labDetail).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="labs-new">
      {redirect && <Redirect to="/labs" />}
      <h1 className="labs-form--title">New Lab Record</h1>
      <div className="labs-form--container">
        <div className="labs-form--field">
          <DateInput value={date} setInput={setDate} validate={validate}>
            Date:
          </DateInput>
          <TextInput required value={lab} setInput={setLab} validate={validate}>
            Lab:
          </TextInput>
          <LabRecordType
            required
            value={recordType}
            setInput={setRecordType}
            validate={validate}
          />
          <TextInput
            required
            value={doctor}
            setInput={setDoctor}
            validate={validate}
          >
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
