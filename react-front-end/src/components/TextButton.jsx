import Button, { ButtonGroup } from '@material-ui/core/Button';

import classnames from 'classnames';
import './TextButton.scss';

export default function TextButton(props) {
  const buttonClass = classnames({
    'button--user-action': props.userAction,
    'button-group--default': props.default,
    'button-group--selected': props.selected,
  });

  return (
    <Button
      className={buttonClass}
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};