import classnames from 'classnames';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconButton(props){

  const classes = useStyles();

  return (
    <Button
    variant="contained"
    color="primary"
    className={classes.button}
    startIcon={<DeleteIcon />}
  >
    Delete
  </Button>
  )
}
