// Libraries
import classnames from "classnames";

// Material UI Components
import Button from "@material-ui/core/Button";

// Stylesheet
import "./TextButton.scss";

export default function TextButtonGroup(props) {
  const buttonClass = classnames({
    "button--group": props.groupButtons,
  });

  const variantStateGroup = () => {
    if (props.groupButtons && props.selected) {
      return "contained";
    } else {
      return "outlined";
    }
  };

  return (
    <Button
      className={buttonClass}
      variant={props.groupButtons ? variantStateGroup() : "contained"}
      color={props.color}
      onChange={props.onChange}
      onClick={props.setState}
      disabled={props.disabled}
      selected={props.selected}
      style={{ border: "1.5px solid" }}
    >
      {props.children}
    </Button>
  );
}
