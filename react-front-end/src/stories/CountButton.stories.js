import { action } from "@storybook/addon-actions";
import CountButton from "../components/CountButton";
import "../index.scss";

export default {
  title: "Count",
  component: CountButton,
};

export const Initial = () => (
  <CountButton
  // clinical_visits={clinical_visits}
  // onChange={action("onChange")}
  ></CountButton>
);

// export const Preselected = () => (
//   <ClinicGroupedButtons
//     // clinical_visits={clinical_visits}
//     // onChange={action("onChange")}

//     value={"CLINIC"}
//   ></ClinicGroupedButtons>
// );

// export const Clickable = () => (
//   <ClinicGroupedButtons
//     onClick={action("Button clicked")}
//   ></ClinicGroupedButtons>
// );