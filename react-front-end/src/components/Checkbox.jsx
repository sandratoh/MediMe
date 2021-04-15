import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels() {
  const [checkbox, setCheckbox] = React.useState({
    checkedMeal: false,
    checkedWater: false,
  });

  const handleChange = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.checkedMeal}
            onChange={handleChange}
            name="checkedMeal"
            color="default"
          />
        }
        label="Take with meal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.checkedWater}
            onChange={handleChange}
            name="checkedWater"
            color="default"
          />
        }
        label="Take with water"
      />
    </FormGroup>
  );
}
