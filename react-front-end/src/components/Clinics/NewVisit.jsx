import { useState } from "react";
import TextInput from "../TextInput";
import ClinicGroupedButtons from "./ClinicGroupedButtons";
import DateInput from "../DateInput";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./NewVisit.scss";

export default function NewVisit() {
  const [typeOfVisit, setTypeOfVisit] = useState(null)
  

  return (
    <section className="clinic-new">
      <div className="clinics-list--icons">
        <ArrowBackIosIcon />
      </div>
      <h1 className="clinics-list--title">New Clinical Visit</h1>
      <div className="clinic-new--form">
        <DateInput>Date:</DateInput>
        <ClinicGroupedButtons onChange={ setTypeOfVisit } state={ typeOfVisit } />
        <TextInput required>Medical Center:</TextInput>
        <TextInput required>Doctor:</TextInput>
        <TextInput>Reason for Visit:</TextInput>
        <TextInput>Doctor's Diagnosis</TextInput>
      </div>
    </section>
  )
};



