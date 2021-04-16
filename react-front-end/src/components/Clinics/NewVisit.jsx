// Libraries
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

// Components
import ClinicGroupedButtons from "./ClinicGroupedButtons";
import DateInput from "../DateInput";
import IconButton from "../IconButton";
import TextInput from "../TextInput";

// Helpers
import { currentDate } from "../../helpers/dateHelpers";
import { dataContext } from "../hooks/DataProvider";

import "../../styles/form.scss";

export default function NewVisit(props) {
  const { addClinicVisit } = useContext(dataContext);

  const [medicalCenter, setMedicalCenter] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState(currentDate());
  const [visitType, setVisitType] = useState(null);
  const [reasonFor, setReasonFor] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  // Manage redirect state based on axios call
  const [redirect, setRedirect] = useState(false);

  // Validate form error state
  const [validate, setValidate] = useState(false);

  const onCancel = () => setRedirect(true);

  const onSave = () => {
    const visitDetail = {
      user_id: 1,
      clinic_id: medicalCenter,
      doctor_id: doctor,
      date,
      type_of_visit: visitType,
      reason_for_visit: reasonFor,
      doctor_diagnosis: diagnosis,
    };

    addClinicVisit(visitDetail).then((res) => {
      res.data.error ? setValidate(true) : setRedirect(true);
    });
  };

  return (
    <section className="clinics-new">
      {redirect && <Redirect to="/clinics" />}
      <h1 className="clinics-form--title">New Clinical Visit</h1>
      <div className="clinics-form--container">
        <div className="clinics-form--field">
          <DateInput value={date} setInput={setDate} validate={validate}>
            Date:
          </DateInput>

          <ClinicGroupedButtons state={visitType} onChange={setVisitType} validate={validate}/>

          <TextInput
            required
            value={medicalCenter}
            setInput={setMedicalCenter}
            validate={validate}
          >
            Medical Center:
          </TextInput>
          <TextInput
            required
            value={doctor}
            setInput={setDoctor}
            validate={validate}
          >
            Doctor:
          </TextInput>
          <TextInput value={reasonFor} setInput={setReasonFor}>
            Reason for Visit:
          </TextInput>
          <TextInput value={diagnosis} setInput={setDiagnosis}>
            Doctor's Diagnosis
          </TextInput>
        </div>
        <div className="clinics-form--user-action">
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
