import { useState } from "react";
import TextInput from "../TextInput";
import DateInput from "../DateInput";
import IconButton from "../IconButton";
import LabRecordType from "./LabsDropdown";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./NewRecord.scss";

export default function NewRecord() {
  const onCancel = () => {
    console.log("cancel button clicked");
  };
  const onSave = () => {
    console.log("save button clicked");
  };

  return (
    <section className="lab-new">
      <div className="labs-list--icons">
        <ArrowBackIosIcon />
      </div>
      <h1 className="labs-list--title">New Lab Record</h1>
      <div className="form">
        <div className="lab-new--form">
          <DateInput>Date:</DateInput>
          <TextInput required>Lab:</TextInput>
          <LabRecordType />
          <TextInput required>Referral Doctor:</TextInput>
        </div>
        <div className="form--user-action">
          <IconButton cancel variant="outlined" color="secondary" onClick={() => onCancel()}>Cancel</IconButton>
          <IconButton save variant="contained" color="secondary" onClick={() => onSave()}>Save</IconButton>
        </div>
      </div>
    </section>
  );
}
