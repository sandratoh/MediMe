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
  <ClinicGroupedButtons
  // clinical_visits={clinical_visits}
  // onChange={action("onChange")}
  ></ClinicGroupedButtons>
);

export const Preselected = () => (
  <ClinicGroupedButtons
    // clinical_visits={clinical_visits}
    // onChange={action("onChange")}

    state={"CLINIC"}
  ></ClinicGroupedButtons>
);

export const Clickable = () => (
  <ClinicGroupedButtons
    onChange={action("Button clicked")}
  ></ClinicGroupedButtons>
);
