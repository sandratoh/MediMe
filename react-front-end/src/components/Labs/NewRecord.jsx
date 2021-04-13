import { useState } from "react";
import { Redirect } from "react-router";
import axios from "axios";

import TextInput from "../TextInput";
import DateInput, { currentDate } from "../DateInput";
import IconButton from "../IconButton";
import LabRecordType from "./LabsDropdown";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./NewRecord.scss";

export default function NewRecord() {
  const [date, setDate] = useState(currentDate());
  const [lab, setLab] = useState("");
  const [recordType, setRecordType] = useState("");
  const [doctor, setDoctor] = useState("");

  // Redirect state
  const [redirect, setRedirect] = useState(false);

  const onCancel = () => {
    console.log("cancel button clicked");
  };
  const onSave = () => {
    const labDetail = {
      user_id: 1,
      date,
      referral_doctor_id: doctor,
      lab_id: lab,
      type_of_test: recordType,
    };

    console.log("labDetail", labDetail);

    return axios
      .post("/api/labs/", labDetail)
      .then((res) => {
        // will only redirect if post goes through and no error is returned
        !res.data.error && setRedirect(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="lab-new">
      {redirect && <Redirect to="/labs" />}
      <div className="labs-list--icons">
        <ArrowBackIosIcon />
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
            onClick={() => onCancel()}
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
