import { useContext, useState } from "react";
import { Redirect } from "react-router";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import TextInput from "../TextInput";
import ClinicGroupedButtons from "./ClinicGroupedButtons";
import DateInput, { currentDate } from "../DateInput";
import IconButton from "../IconButton";
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

    addClinicVisit(visitDetail).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="clinics-new">
      {redirect && <Redirect to="/clinics" />}
      <div className="clinics-list--icons">
        <ArrowBackIosIcon />
      </div>
      <h1 className="clinics-list--title">New Clinical Visit</h1>
      <div className="clinics-form--container">
        <div className="clinics--form--field">
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
