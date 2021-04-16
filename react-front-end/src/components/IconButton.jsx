import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

import classnames from "classnames";
import "./IconButton.scss";

export default function IconButton(props) {
  const buttonClass = classnames("button", {
    "button--save": props.save,
    "button--delete": props.delete,
    "button--new": props.new,
    "button--new-dose": props.newDose,
    "button--cancel": props.cancel,
    "button--edit": props.edit,
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
    >
      {props.children}
    </Button>
  );
}
