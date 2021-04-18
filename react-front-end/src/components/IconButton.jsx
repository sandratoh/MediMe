// Libraries
import classnames from "classnames";

// Material UI Components
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

// Stylesheet
import "./IconButton.scss";

export default function IconButton(props) {
  const buttonClass = classnames("button", {
    "button--save": props.save,
    "button--delete": props.delete,
    "button--new": props.new,
    "button--new-dose": props.newDose,
    "button--cancel": props.cancel,
    "button--edit": props.edit,
    "button--login": props.login,
  });

  const icon = (props) => {
    if (props.save) {
      return <SaveIcon />;
    }
    if (props.delete) {
      return <DeleteIcon />;
    }
    if (props.new) {
      return <AddIcon />;
    }
    if (props.newDose) {
      return <AddIcon />;
    }
    if (props.cancel) {
      return <CancelIcon />;
    }
    if (props.edit) {
      return <EditIcon />;
    }
    if (props.login) {
      return <VpnKeyIcon />;
    }
  };

  return (
    <Button
      className={buttonClass}
      variant={props.variant}
      color={props.color}
      startIcon={icon(props)}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
}
