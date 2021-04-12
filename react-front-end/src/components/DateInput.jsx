import './DateInput.scss'
import TextField from '@material-ui/core/TextField';

export default function DateInput(props) {
  const currentDate = () => {
    return new Date().toISOString().substring(0, 10)
  };

  const parsePropsDate = props => {
    const date = new Date(props.date);
    
    return date.toISOString().substring(0, 10);
  };

  return (
    <form className="date-input--container" noValidate>
      <TextField
        id={props.id}
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