// Libraries
import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

// Components
import TextInput from "../TextInput";
import ClinicGroupedButtons from "./ClinicGroupedButtons";
import DateInput from "../DateInput";
import IconButton from "../IconButton";

// Helpers
import { dataContext } from "../Provider/DataProvider";
import { findNameById } from "../../helpers/selectors";

// Stylesheet
import "../../styles/form.scss";

export default function EditVisit() {
  const {
    clinicalVisits,
    clinics,
    doctors,
    clinicalVisitEditId,
    editClinicVisit,
    clinicExists,
    addClinic,
    doctorExists,
    addDoctor,
  } = useContext(dataContext);

  const visit = clinicalVisits.find(
    (visit) => visit.id === clinicalVisitEditId
  );

  const [medicalCenter, setMedicalCenter] = useState(
    findNameById(clinics, visit.clinic_id)
  );

  const [doctor, setDoctor] = useState(findNameById(doctors, visit.doctor_id));
  const [date, setDate] = useState(visit.date);
  const [visitType, setVisitType] = useState(visit.type_of_visit);
  const [reasonFor, setReasonFor] = useState(visit.reason_for_visit);
  const [diagnosis, setDiagnosis] = useState(visit.doctor_diagnosis);

  // Manage redirect state based on axios call
  const [redirect, setRedirect] = useState(false);

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

    if (!clinicExists(medicalCenter)) {
      addClinic({ name: medicalCenter });
    }

    if (!doctorExists(doctor)) {
      addDoctor({ name: doctor });
    }

    editClinicVisit(visitDetail).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="clinics-edit">
      {redirect && <Redirect to="/clinics/view" />}
      <h1 className="clinics-form--title">Update Clinical Visit</h1>
      <div className="clinics-form--container">
        <div className="clinics-form--field">
          <DateInput date={date} setInput={setDate} validate={validate}>
            Date:
          </DateInput>
          <ClinicGroupedButtons state={visitType} onChange={setVisitType} />
          <TextInput
            required
            // defaultValue={medicalCenter}
            value={medicalCenter}
            setInput={setMedicalCenter}
            validate={validate}
          >
            Medical Center:
          </TextInput>
          <TextInput
            required
            // defaultValue={doctor}
            value={doctor}
            setInput={setDoctor}
            validate={validate}
          >
            Doctor:
          </TextInput>
          <TextInput
            // defaultValue={reasonFor}
            value={reasonFor}
            setInput={setReasonFor}
          >
            Reason for Visit:
          </TextInput>
          <TextInput
            // defaultValue={diagnosis}
            value={diagnosis}
            setInput={setDiagnosis}
          >
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
