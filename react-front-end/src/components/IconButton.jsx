import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

import classnames from 'classnames';
import './IconButton.scss';


export default function IconButton(props){
  const buttonClass = classnames('button', {
    'button--save': props.save,
    'button--delete': props.delete,
    'button--new': props.new
  });

  const icon = props => {
    if (props.save) {
      return <SaveIcon />;
    }
    if (props.delete) {
      return <DeleteIcon />;
    }
    if (props.new) {
      return <AddIcon />;
    }
  };

  return (
    <Button
      className={buttonClass}
      variant={props.variant}
      color={props.color}
      icon={icon(props)}
      onClick={props.onClick}
    >
    {props.children}
    </Button>
  );
};
