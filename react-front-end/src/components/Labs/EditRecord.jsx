// Libraries
import { useState, useContext } from "react";
import { Redirect } from "react-router";

// Components

import IconButton from "../IconButton";
import DateInput from "../DateInput";
import LabRecordType from "./LabsDropdown";
import TextInput from "../TextInput";

// Helpers
import { dataContext } from "../Provider/DataProvider";
import { findNameById } from "../../helpers/selectors";

// Stylesheet
import "../../styles/form.scss";

export default function EditRecord() {
  const {
    labRecords,
    labs,
    doctors,
    labRecordEditId,
    editLabRecord,
    labExists, 
    addLab, 
    doctorExists, 
    addDoctor,
  } = useContext(dataContext);
  const record = labRecords.find((record) => record.id === labRecordEditId);

  const [date, setDate] = useState(record.date);
  const [lab, setLab] = useState(findNameById(labs, record.lab_id));
  const [recordType, setRecordType] = useState(record.type_of_test);
  const [doctor, setDoctor] = useState(
    findNameById(doctors, record.referral_doctor_id)
  );

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

    if(!labExists(lab)) {
      addLab({ name: lab });
    };

    if (!doctorExists(doctor)) {
      addDoctor({ name: doctor });
    };

    editLabRecord(labDetail).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="labs-edit">
      {redirect && <Redirect to="/labs/view" />}
      <h1 className="labs-form--title">Update Lab Record</h1>
      <div className="labs-form--container">
        <div className="labs-form--field">
          <DateInput date={date} setInput={setDate} validate={validate}>
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
