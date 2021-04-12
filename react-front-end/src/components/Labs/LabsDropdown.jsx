import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./LabsDropdown.scss";

export default function LabDropdown(props) {
  const [recordType, setRecordType] = useState("");

  const handleChange = (e) => {
    setRecordType(e.target.value);
    console.log("target", e.target.value);
    // console.log("recordType", recordType);
  };

  return (
    <section className="dropdown-container">
      <FormControl variant="outlined" className="dropdown--input">
        <InputLabel id="demo-simple-select-outlined-label">
          Type of Record
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleChange}
          label="Type of Record"
          value={recordType}
        >
          <MenuItem value={"BLOOD"}>Blood</MenuItem>
          <MenuItem value={"MAMMOGRAM"}>Mammogram</MenuItem>
          <MenuItem value={"MRI"}>MRI</MenuItem>
          <MenuItem value={"ULTRASOUND"}>Ultrasound</MenuItem>
          <MenuItem value={"URINE"}>Urine</MenuItem>
          <MenuItem value={"XRAY"}>X-ray</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}
