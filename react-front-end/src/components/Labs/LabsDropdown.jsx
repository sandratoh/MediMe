import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./LabsDropdown.scss";
import { FormHelperText } from "@material-ui/core";

export default function LabsDropdown(props) {
  return (
    <section className="dropdown-container">
      <FormControl variant="outlined" className="dropdown--input">
        <InputLabel id="demo-simple-select-outlined-label" error={!props.value && props.validate}>
          Type of Record
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={(event) => props.setInput(event.target.value)}
          label="Type of Record"
          value={props.value}
          required
          error={!props.value && props.validate}
        >
          <MenuItem value={"BLOOD"}>Blood</MenuItem>
          <MenuItem value={"MAMMOGRAM"}>Mammogram</MenuItem>
          <MenuItem value={"MRI"}>MRI</MenuItem>
          <MenuItem value={"ULTRASOUND"}>Ultrasound</MenuItem>
          <MenuItem value={"URINE"}>Urine</MenuItem>
          <MenuItem value={"XRAY"}>X-ray</MenuItem>
        </Select>
      </FormControl>
      <FormHelperText error={!props.value && props.validate}>
        {!props.value && props.validate && "This field cannot be blank."}
      </FormHelperText>
    </section>
  );
}
