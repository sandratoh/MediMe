// Material UI Components
import TextField from "@material-ui/core/TextField";

// Helpers
import { formatDateToISO } from "../helpers/dateHelpers";

// Stylesheet
import "./DateInput.scss";

export default function DateInputOpt(props) {
  return (
    <form className="date-input--container" noValidate autoComplete="off">
      <TextField
        id={props.id}
        value={props.value}
        onChange={(event) => props.setInput(event.target.value)}
        className="date-input--field"
        error={!props.value && props.validate}
        label={props.children}
        defaultValue={props.date ? formatDateToISO(props.date) : null}
        inputProps={{
          min: new Date().toISOString().substring(0, 10),
        }}
        type="date"
        size="medium"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
