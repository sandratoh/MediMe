import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import './TextInput.scss';

export default function BasicTextFields(props) {

  // const [input, setInput] = useState("");

  return (
    <form className="text-input--container" noValidate autoComplete="off">
      <TextField 
      required={props.required}
      error={props.required && props.validate && props.value === ""}
      helperText={props.helperText}
      id="outlined-basic"
      variant="outlined"
      multiline
      className="text-input--field"
      label={props.children}
      defaultValue={props.defaultValue}
      value={props.value}
      onChange={event => props.setInput(event.target.value)}
    />
    </form>
  );
};