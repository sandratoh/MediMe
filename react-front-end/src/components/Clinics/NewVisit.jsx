import { useState } from "react";
import axios from "axios";
import TextInput from "../TextInput";
import ClinicGroupedButtons from "./ClinicGroupedButtons";
import DateInput, { currentDate } from "../DateInput";
import IconButton from "../IconButton";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../../styles/form.scss";
import { Redirect } from "react-router";

export default function NewVisit() {
  const [medicalCenter, setMedicalCenter] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState(currentDate());
  const [visitType, setVisitType] = useState(null);
  const [reasonFor, setReasonFor] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  // Manage redirect state based on axios call
  const [redirect, setRedirect] = useState(false);

  const onCancel = () => setRedirect(true);

  const onSave = () => {
    const visitDetail = {
      user_id: 1,
      clinic_id: medicalCenter,
      referral_doctor_id: doctor,
      date,
      type_of_visit: visitType,
      reason_for_visit: reasonFor,
      doctor_diagnosis: diagnosis,
    };

    console.log("visitDetail", visitDetail);

    return axios
      .post("/api/clinics/", visitDetail)
      .then((res) => {
        // will only redirect if post goes through and no error is returned
        !res.data.error && setRedirect(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="clinic-new">
      {redirect && <Redirect to="/clinics" />}
      <div className="clinics-list--icons">
        <ArrowBackIosIcon />
      </div>
      <h1 className="clinics-list--title">New Clinical Visit</h1>
      <div className="clinic-form--container">
        <div className="clinic--form--field">
          <DateInput value={date} setInput={setDate}>
            Date:
          </DateInput>
          <ClinicGroupedButtons state={visitType} onChange={setVisitType} />
          <TextInput required value={medicalCenter} setInput={setMedicalCenter}>
            Medical Center:
          </TextInput>
          <TextInput required value={doctor} setInput={setDoctor}>
            Doctor:
          </TextInput>
          <TextInput value={reasonFor} setInput={setReasonFor}>
            Reason for Visit:
          </TextInput>
          <TextInput value={diagnosis} setInput={setDiagnosis}>
            Doctor's Diagnosis
          </TextInput>
        </div>
        <div className="clinic-form--user-action">
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
