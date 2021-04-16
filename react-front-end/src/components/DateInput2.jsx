// Material UI Components
import TextField from "@material-ui/core/TextField";

// Stylesheet
import "./DateInput.scss";

export default function BasicTextFields(props) {
  return (
    <form className="date-input--container" noValidate autoComplete="off">
      <TextField
        id={props.id}
        value={props.value}
        onChange={(event) => props.setInput(event.target.value)}
        className="date-input--field"
        error={!props.value && props.validate}
        label={props.children}
        defaultValue={null}
        inputProps={{
          min: new Date().toISOString().substring(0, 10),
        }}
        type="date"
        size="large"
        InputLabelProps={{
          shrink: true,
        }}
        onKeyDown={(event) => {
          event.preventDefault();
        }}
      />
    </form>
  );
}
