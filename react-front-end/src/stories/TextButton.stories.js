// Libraries
import { action } from "@storybook/addon-actions";

// Components
import TextButton from "../components/TextButton";

// Stylesheet
import "../index.scss";

export default {
  title: "TextButton",
  component: TextButton,
};

export const Primary = () => (
  <TextButton userAction variant="contained" color="primary">
    Primary
  </TextButton>
);

export const Secondary = () => (
  <TextButton userAction color="secondary" variant="contained">
    Secondary
  </TextButton>
);

export const Clickable = () => (
  <TextButton
    userAction
    color="primary"
    variant="contained"
    onClick={action("Button clicked")}
  >
    Clickable
  </TextButton>
);

export const Disabled = () => (
  <TextButton userAction variant="contained" disabled>
    Disabled
  </TextButton>
);

export const ButtonGroupDefault = () => (
  <TextButton variant="contained" color="primary" groupButtons>
    Group
  </TextButton>
);

export const ButtonGroupSelected = () => (
  <TextButton variant="contained" color="primary" groupButtons selected>
    Group
  </TextButton>
);
