import TextField from '@material-ui/core/TextField';
import './TextInput.scss';

export default function BasicTextFields(props) {

  return (
    <form className="text-input--container" noValidate autoComplete="off">
      <TextField 
      required={props.required}
      error={props.error}
      helperText={props.helperText}
      id="outlined-basic"
      variant="outlined"
      multiline
      className="text-input--field"
      label={props.children}
      defaultValue={props.defaultValue}
    />
    </form>
  );
};