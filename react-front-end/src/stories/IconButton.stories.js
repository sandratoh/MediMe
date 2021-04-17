// Libraries
import { action } from "@storybook/addon-actions";

// Components
import IconButton from "../components/IconButton";

export default {
  title: "IconButton",
  component: IconButton,
};

export const Delete = () => (
  <IconButton
    delete
    onClick={action("Delete button clicked")}
    variant="outlined"
    color="secondary"
  >
    Delete
  </IconButton>
);

export const Save = () => (
  <IconButton
    save
    onClick={action("Save button clicked")}
    color="primary"
    variant="contained"
  >
    Save
  </IconButton>
);

export const New = () => (
  <IconButton
    new
    onClick={action("New button clicked")}
    color="secondary"
    variant="contained"
  >
    New
  </IconButton>
);

export const Cancel = () => (
  <IconButton
    cancel
    onClick={action("New button clicked")}
    color="secondary"
    variant="outlined"
  >
    Cancel
  </IconButton>
);

export const Edit = () => (
  <IconButton
    edit
    onClick={action("Edit button clicked")}
    color="secondary"
    variant="contained"
  >
    Edit
  </IconButton>
);

export const Login = () => (
  <IconButton
    login
    onClick={action("Login button clicked")}
    color="secondary"
    variant="contained"
  >
    Login
  </IconButton>
);
