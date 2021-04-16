import Button from '@material-ui/core/Button';

import classnames from 'classnames';
import './TextButton.scss';

export default function TextButton(props) {
  const buttonClass = classnames({
    'button--user-action': props.userAction,
    'button--group': props.groupButtons
  });

  const variantStateGroup = () => {
    if (props.groupButtons && props.selected) {
      return "contained"
    }
    else {
      return "outlined"
    }
  }

  return (
    <Button
      className={buttonClass}
      variant={props.variant || (props.groupButtons ? variantStateGroup() : "contained")}
      color={props.color}
      onChange={props.onChange}
      onClick={props.onClick}
      disabled={props.disabled}
      selected={props.selected}
      style={props.style}
    >
      {props.children}
    </Button>
  );
};

