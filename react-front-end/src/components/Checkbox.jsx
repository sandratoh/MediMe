// Libraries
import React from "react";

// Material UI Components
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

export default function Checkbox1() {
  const [checkbox, setCheckbox] = React.useState({
    food: false,
    water: false,
  });

  const handleChange = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.food}
            onChange={handleChange}
            name="food"
            color="default"
          />
        }
        label="Take with food"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.waterater}
            onChange={handleChange}
            name="water"
            color="default"
          />
        }
        label="Take with water"
      />
    </FormGroup>
  );
}
