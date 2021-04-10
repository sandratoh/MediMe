import { action } from "@storybook/addon-actions";
import IconButton from "../components/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import '../index.scss';

export default { 
  title: 'IconButton',
  component: IconButton,
 };

export const Delete = () => (
  <IconButton
    delete
    onClick={action('Delete button clicked')}
    variant="outlined"
    color="secondary"
    startIcon= {<DeleteIcon />}
  >
    Delete
  </IconButton>
);

export const Save = () => (
  <IconButton
    save
    onClick={action('Save button clicked')} 
    color="primary"
    variant="contained"
    startIcon= {<SaveIcon />}
  >
    Save
  </IconButton>
);

export const New = () => (
  <IconButton 
    new
    onClick={action('New button clicked')} 
    color="secondary" 
    variant="contained"
    startIcon= {<AddIcon />}
  >
    New
  </IconButton>
);

