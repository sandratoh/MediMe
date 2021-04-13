import './DateInput.scss'
import { useState } from "react";
import TextField from '@material-ui/core/TextField';

export const currentDate = () => {
  return new Date().toISOString().substring(0, 10)
};

export default function DateInput(props) {

  // const [dateInput, setDateInput] = useState(currentDate);

  const parsePropsDate = props => {
    const date = new Date(props.date);
    
    return date.toISOString().substring(0, 10);
  };

  return (
    <form className="date-input--container" noValidate>
      <TextField
        id={props.id}
        value={props.value}
        onChange={event => props.setInput(event.target.value)}
        className="date-input--field"
        error={props.error}
        label={props.children}
        type="date"
        defaultValue={props.date ? parsePropsDate(props) : currentDate()}
        size="large"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}