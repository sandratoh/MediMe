
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      required={props.required}
      id="standard"
      label={props.children}
      InputLabelProps={{
        shrink: true,
      }}
      defaultValue={props.defaultValue}
    />
    </form>
  );
}