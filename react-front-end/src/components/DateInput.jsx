// Material UI Components
import TextField from "@material-ui/core/TextField";

// Helpers
import { currentDate, formatDateToISO } from "../helpers/dateHelpers";

// Stylesheet
import "./DateInput.scss";

export default function DateInput(props) {
  return (
    <form className="date-input--container" noValidate>
      <TextField
        required={!props.notRequired}
        helperText={
          !props.value && props.validate && "This field cannot be blank."
        }
        id={props.id}
        onChange={(event) => props.setInput(event.target.value)}
        className="date-input--field"
        error={!props.value && props.validate}
        label={props.children}
        type="date"
        defaultValue={
          props.value ? formatDateToISO(props.value) : currentDate()
        }
        size="medium"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
