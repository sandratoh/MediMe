import { useState, useContext } from "react";
import { dataContext } from "../hooks/DataProvider";
import axios from 'axios';
import TextInput from "../TextInput";
import ClinicGroupedButtons from "./ClinicGroupedButtons";
import DateInput, { currentDate } from "../DateInput";
import IconButton from "../IconButton";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../../styles/form.scss";




export default function NewVisit() {
 const { clinicalVisits, clinics, doctors } = useContext( dataContext );
 const [medicalCenter, setMedicalCenter] = useState('');
 const [doctor, setDoctor] = useState('');
 const [date, setDate] = useState(currentDate());
 const [visitType, setVisitType] = useState(null);
 const [reasonFor, setReasonFor] = useState('');
 const [diagnosis, setDiagnosis] = useState('');


//  const clinicWeWant = clinics.find(clinic => {
//   clinic.name === medicalCenter
// });

//   const doctorWeWant = doctors.find(doc => {
//     doc.name === doctor
// });
  // const [state, setState] = useState({
  //   user_id: 1, 
  //   clinic_id: 1,
  //   referral_doctor_id: 1,
  //   date: '2020-08-19', 
  //   type_of_visit: 'CLINIC', 
  //   reason_for_visit: '', 
  //   doctor_diagnosis: ''
  // })
  
  // const setDoctor = doctor => state.referral_doctor_id = doctor;

  console.log("clinics", clinics);
  console.log("doctors", doctors);



  const findClinicByName = (clinics, clinicName) => {
    // const clinicWeWant = clinics.find(clinic => {
    //   clinic.name === clinicName
    // })
    
    // return clinicWeWant.id;
    
    
    let clinicID;
    clinics.forEach((clinic) => {
      
      if (clinic.name === clinicName) {
        console.log("clinic", clinic)
        clinicID = clinic.id;
      }
      return clinicID;
    });
    // return 1;
  };

    const findDoctorByName = (doctors, doctor) => {
      let doctorId;
      doctors.forEach((doc) => {
        if (doc.name === doctor) {
          doctorId = doc.id;
        }
      });
      return doctorId;
    };  
      
      // return doctorWeWant.id;
    // let doctorID;
    // doctors.forEach((doctor) => {
    //   if (doctor.name === doctorName) {
    //     doctorID = doctor.id;
    //   }
    // });
    // return 1;

 

  const handleSave = () => {
    const visitDetail = {
      user_id: 1,
      clinic_id: findClinicByName(clinics, medicalCenter),
      referral_doctor_id: findDoctorByName(doctors, doctor),
      date,
      type_of_visit: visitType,
      reason_for_visit: reasonFor,
      doctor_diagnosis: diagnosis
    }

    console.log('visitDetail', visitDetail);

    return axios
      .post('/api/clinics', visitDetail)
      .then(res => console.log('axios then from newvisit', res))
      .catch(err => console.log(err))
  };
  
  
  const onCancel = () => {
    console.log("cancel button clicked");
  };
  const onSave = () => {
    handleSave();
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
          <DateInput value={date} setInput={setDate}>Date:</DateInput>
          <ClinicGroupedButtons state={visitType} onChange={setVisitType} />
          <TextInput required value={medicalCenter} setInput={setMedicalCenter} >Medical Center:</TextInput>
          <TextInput required value={doctor} setInput={setDoctor} >Doctor:</TextInput>
          <TextInput value={reasonFor} setInput={setReasonFor}>Reason for Visit:</TextInput>
          <TextInput value={diagnosis} setInput={setDiagnosis}>Doctor's Diagnosis</TextInput>
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
