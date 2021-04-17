// Libraries
import { action } from "@storybook/addon-actions";

// Components
import RhGroupedButtons from "../components/Users/RhGroupedButtons";

// Stylesheet
import "../index.scss";

export default {
  title: "Rh Grouped Button",
  component: RhGroupedButtons,
};

export const Initial = () => <RhGroupedButtons></RhGroupedButtons>;

export const Preselected = () => (
  <RhGroupedButtons
    onChange={action("onChange")}
    state={"POSITIVE"}
  ></RhGroupedButtons>
);

export const Clickable = () => (
  <RhGroupedButtons onChange={action("onChange")}></RhGroupedButtons>
);
