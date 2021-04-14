import { useState, useContext } from "react";
import { Redirect } from "react-router";
import BackButton from "../BackButton";

import TextInput from "../TextInput";
import ClinicGroupedButtons from "./ClinicGroupedButtons";
import DateInput from "../DateInput";
import IconButton from "../IconButton";
import { dataContext } from "../hooks/DataProvider";

import "../../styles/form.scss";

const findClinicById = (clinics, id) => {
  let name;
  clinics.forEach((clinic) => {
    if (clinic.id === id) {
      name = clinic.name;
    }
  });
  return name;
};

const findDoctorById = (doctors, id) => {
  let name;
  doctors.forEach((doctor) => {
    if (doctor.id === id) {
      name = doctor.name;
    }
  });
  return name;
};

export default function EditVisit() {
  const {
    clinicalVisits,
    clinics,
    doctors,
    clinicalVisitEdit,
    editClinicVisit,
  } = useContext(dataContext);
  const visit = clinicalVisits.find((visit) => visit.id === clinicalVisitEdit);
  const [medicalCenter, setMedicalCenter] = useState(
    findClinicById(clinics, visit.clinic_id)
  );
  const [doctor, setDoctor] = useState(
    findDoctorById(doctors, visit.referral_doctor_id)
  );
  const [date, setDate] = useState(visit.date);
  const [visitType, setVisitType] = useState(visit.type_of_visit);
  const [reasonFor, setReasonFor] = useState(visit.reason_for_visit);
  const [diagnosis, setDiagnosis] = useState(visit.doctor_diagnosis);

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

    editClinicVisit(visitDetail).then((res) => {
      !res.data.error && setRedirect(true);
    });
  };

  return (
    <section className="clinics-edit">
      {redirect && <Redirect to="/clinics/view" />}
      <div className="clinics-list--icons">
        <BackButton />
      </div>
      <h1 className="clinics-list--title">Update Clinical Visit</h1>
      <div className="clinics-form--container">
        <div className="clinics--form--field">
          <DateInput date={date} setInput={setDate}>
            Date:
          </DateInput>
          <ClinicGroupedButtons state={visitType} onChange={setVisitType} />
          <TextInput
            required
            // defaultValue={medicalCenter}
            value={medicalCenter}
            setInput={setMedicalCenter}
          >
            Medical Center:
          </TextInput>
          <TextInput
            required
            // defaultValue={doctor}
            value={doctor}
            setInput={setDoctor}
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
