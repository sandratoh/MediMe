import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 327,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LabDropdown(props) {
  const classes = useStyles();
  const [recordType, setRecordType] = useState("");

  const handleChange = (e) => {
    setRecordType(e.target.value);
    console.log("target", e.target.value);
    // console.log("recordType", recordType);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
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
    </div>
  );
}
