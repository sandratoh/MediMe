import { useState } from "react";
import { dataContext } from "../hooks/DataProvider";
import axios from 'axios';
import TextInput from "../TextInput";
import ClinicGroupedButtons from "./ClinicGroupedButtons";
import DateInput, { currentDate } from "../DateInput";
import IconButton from "../IconButton";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../../styles/form.scss";

export default function NewVisit() {
 const [typeOfVisit, setTypeOfVisit] = useState(null);
 const [medicalCenter, setMedicalCenter] = useState('');

  const [visitDetail, setVisitDetail] = useState({
    user_id: 1, 
    clinic_id: 1,
    referral_doctor_id: 1,
    date: '2020-08-19', 
    type_of_visit: 'CLINIC', 
    reason_for_visit: '', 
    doctor_diagnosis: ''
  })

  const handleSave = (clinic_id, referral_doctor_id, date, type_of_visit, reason_for_visit, doctor_diagnosis) => {
    const visit = {
      clinic_id: function() {}, // find clinic id by name, if no name, then create a clinic and then return the id 
      referral_doctor_id: function() {}, // find doctor id by name, if no name, then create a doctor and then return the id 
      date: 
      type_of_visit: 'CLINIC', 
      reason_for_visit: '', 
      doctor_diagnosis: ''
      
    }
  }

  // user_id, clinic_id, referral_doctor_id, date, type_of_visit, reason_for_visit, doctor_diagnosis
  // axios.post('/user', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  const addVisit = () => {
    return axios
      .post('/api/clinics', visitDetail)
      .then()
  };
  
  
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
      <h1 className="clinics-list--title">New Clinical Visit</h1>
      <div className="clinic-form--container">
        <div className="clinic--form--field">
          <DateInput>Date:</DateInput>
          <ClinicGroupedButtons state={typeOfVisit} onChange={setTypeOfVisit} />
          <TextInput value={medicalCenter} setInput={setMedicalCenter} required >Medical Center:</TextInput>
          <TextInput required>Doctor:</TextInput>
          <TextInput>Reason for Visit:</TextInput>
          <TextInput>Doctor's Diagnosis</TextInput>
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
