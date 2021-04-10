import './DateInput.scss'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 327,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  const dateInputClass = classNames('date-input');

  const currentDate = () => {
    return new Date().toISOString().substring(0, 10)
  }
  
  return (
    <form className={classes.container} noValidate>
      <TextField
        id={props.id}
        className={dateInputClass}
        error={props.error}
        label={props.children}
        type="date"
        defaultValue={currentDate()}
        size="large"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}