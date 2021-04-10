// import { storiesOf } from "@storybook/react";
import { action }    from "@storybook/addon-actions";
import IconButton from "../components/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import '../index.scss'

export default { 
  title: 'IconButton',
  component: IconButton,
 };


export const Delete = () => (
  <IconButton
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
    onClick={action('New button clicked')} 
    color="secondary" 
    variant="contained"
    startIcon= {<AddIcon />}
  >
    New
  </IconButton>
);

// export const Delete = Template.bind({});
// Delete.args = {
//   secondary: true,
//   label: 'Delete',
// };

// export const Save = Template.bind({})
// Save.args = {
//   label: 'Save',
//   color: 'secondary'
// };

// export const New = Template.bind({})
// New.args = {
//   primary: true,
//   label: 'New'
// };

