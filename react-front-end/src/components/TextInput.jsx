import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  textField: {
    width: 327,
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField 
      required={props.required}
      error={props.error}
      helperText={props.helperText}
      id="outlined-basic"
      variant="outlined"
      multiline
      className={classes.textField}
      label={props.children}
      defaultValue={props.defaultValue}
    />
    </form>
  );
};