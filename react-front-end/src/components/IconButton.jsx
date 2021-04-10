import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

import classnames from 'classnames';
import './IconButton.scss';


export default function IconButton(props){
  const buttonClass = classnames('button', 'button-secondary', {
    'button--save': props.save,
    'button--delete': props.delete,
    'button--new': props.new
  })

  return (
    <Button
      className={buttonClass}
      variant={props.variant}
      color={props.color}
      startIcon={props.startIcon}
      onClick={props.onClick}
    >
    {props.children}
    </Button>
  )
}
