import { useState, useContext } from "react";
import { dataContext } from "../hooks/DataProvider";
import TextInput from "../TextInput";
import ClinicGroupedButtons from "./ClinicGroupedButtons";
import DateInput from "../DateInput";
import IconButton from "../IconButton";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../../styles/form.scss";

// const clinical_visits = [
//   {
//     id: 1,
//     user_id: 1,
//     clinic_id: 3,
//     referral_doctor_id: 2,
//     date: "2018-09-09T07:00:00.000Z",
//     type_of_visit: "HOSPITAL",
//     reason_for_visit: "Stomach pain and vomit",
//     doctor_diagnosis: "Food poisoning",
//   },
// ];

// const clinics = [
//   {id: 1, name: "Dr. Dodek Wenner Family Practice"},
//   {id: 2, name: "Dr. Howard Liang S.H. Inc."},
//   {id: 3, name: "Vancouver General Hospital"},
// ];

const findClinicById = (clinics, id) => {
    let name;
    clinics.forEach((clinic) => {
      if (clinic.id === id) {
        name = clinic.name;
      }
    });
    return name;
  };

// const doctors = [
//   {id: 1, name: "Dr. Gale Dodek-Wenner"},
//   {id: 2, name: "Dr. Howard Liang"},
//   {id: 3, name: "Dr. Gregory House"},
//   {id: 4, name: "Dr. Sheldon Cooper"},
//   {id: 5, name: "Dr. Drake Ramoray"},
//   {id: 6, name: "Dr. Ross Geller"}
// ];

const findDoctorById = (doctors, id) => {
  let name;
  doctors.forEach((doctor) => {
    if (doctor.id === id) {
      name = doctor.name;
    }
  });
  return name;
};

const formatDate = (visit) => {
  const dateData = visit.date;
  const date = new Date(dateData);

  return date.toDateString();
};

export default function EditVisit() {
  const { clinicalVisits, clinics, doctors, clinicalVisitEdit } = useContext(
    dataContext
  );
  const visit = clinicalVisits.find(
    (visit) => visit.id === clinicalVisitEdit
  );
  // const [typeOfVisit, setTypeOfVisit] = useState(clinical_visits[0].type_of_visit);

  const onCancel = () => {
    console.log("cancel button clicked");
  };
  const onSave = () => {
    console.log("save button clicked");
  };

  return (
    <section className="clinic-new">
      <div className="clinics-list--icons">
        <ArrowBackIosIcon />
      </div>
      <h1 className="clinics-list--title">Update Clinical Visit</h1>
      <div className="clinic-form--container">
        <div className="clinic--form--field">
          <DateInput date={formatDate(visit)}>Date:</DateInput>
          {/* <ClinicGroupedButtons state={typeOfVisit} onChange={setTypeOfVisit} /> */}
          <TextInput required defaultValue={ findClinicById(clinics, visit.clinic_id) }>Medical Center:</TextInput>
          <TextInput required defaultValue={ findDoctorById(doctors, visit.referral_doctor_id) }>Doctor:</TextInput>
          <TextInput defaultValue={ visit.reason_for_visit }>Reason for Visit:</TextInput>
          <TextInput defaultValue={ visit.doctor_diagnosis }>Doctor's Diagnosis</TextInput>
        </div>
        <div className="clinic-form--user-action">
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
            onClick={() => onSave()}
          >
            Save
          </IconButton>
        </div>
      </div>
    </section>
  );
}
