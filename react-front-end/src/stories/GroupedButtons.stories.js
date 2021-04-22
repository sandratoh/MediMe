// Libraries
import { action } from "@storybook/addon-actions";

// Components
import ClinicGroupedButtons from "../components/Clinics/ClinicGroupedButtons";

// Stylesheet
import "../index.scss";

export default {
  title: "Grouped Button",
  component: ClinicGroupedButtons,
};

export const Initial = () => (
  <ClinicGroupedButtons />
);

export const Preselected = () => (
  <ClinicGroupedButtons state={"CLINIC"}></ClinicGroupedButtons>
);

export const Clickable = () => (
  <ClinicGroupedButtons onChange={action("Button clicked")}></ClinicGroupedButtons>
);
