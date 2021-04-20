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
import { dataContext } from "../Provider/DataProvider";

import "../../styles/form.scss";

export default function NewVisit(props) {
  const {
    addClinicVisit,
    clinicExists,
    addClinic,
    doctorExists,
    addDoctor,
  } = useContext(dataContext);

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
    if (!date || medicalCenter === "" || doctor === "" || !visitType) {
      return setValidate(true);
    }

    const visitDetail = {
      user_id: 1,
      clinic_id: medicalCenter,
      doctor_id: doctor,
      date,
      type_of_visit: visitType,
      reason_for_visit: reasonFor,
      doctor_diagnosis: diagnosis,
    };

    !clinicExists(medicalCenter) && addClinic({ name: medicalCenter });

    !doctorExists(doctor) && addDoctor({ name: doctor });

    addClinicVisit(visitDetail).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="clinics-new">
      {redirect && <Redirect to="/clinics" />}
      <h1 className="clinics-form--title">New Clinical Visit</h1>
      <div className="clinics-form--container">
        <div className="clinics-form--field">
          <div data-testid="visit-date-input">
            <DateInput value={date} setInput={setDate} validate={validate}>
              Date:
            </DateInput>

            <ClinicGroupedButtons
              state={visitType}
              onChange={setVisitType}
              validate={validate}
            />
          </div>

          <div data-testid="medical-center-input">
            <TextInput
              required
              value={medicalCenter}
              setInput={setMedicalCenter}
              validate={validate}
            >
              Medical Center:
            </TextInput>
          </div>
          <div data-testid="doctor-input">
            <TextInput
              required
              value={doctor}
              setInput={setDoctor}
              validate={validate}
            >
              Doctor:
            </TextInput>
          </div>
          <div data-testid="reason-visit-input">
            <TextInput value={reasonFor} setInput={setReasonFor}>
              Reason for Visit:
            </TextInput>
          </div>
          <div data-testid="diagnosis-input">
            <TextInput value={diagnosis} setInput={setDiagnosis}>
              Doctor's Diagnosis:
            </TextInput>
          </div>
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
