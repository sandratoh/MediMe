// Material UI Components
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

// Stylesheet
import "./TextInput.scss";

export default function TextInput(props) {
  const unitMarker = (unit) => {
    return unit
      ? {
          endAdornment: (
            <InputAdornment position="end">{props.unit}</InputAdornment>
          ),
        }
      : null;
  };
  return (
    <form className="text-input--container" noValidate autoComplete="off">
      <TextField
        InputProps={unitMarker(props.unit)}
        required={props.required}
        error={
          props.required &&
          props.validate &&
          (props.value === "" || props.value === null)
        }
        helperText={
          !props.value && props.validate && "This field cannot be blank."
        }
        id="outlined-basic"
        variant="outlined"
        multiline
        className="text-input--field"
        label={props.children}
        defaultValue={props.value || props.defaultValue}
        onChange={(event) => props.setInput(event.target.value)}
      />
    </form>
  );
}
