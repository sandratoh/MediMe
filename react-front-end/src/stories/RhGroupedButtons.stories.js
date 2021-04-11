import { action } from "@storybook/addon-actions";
import RhGroupedButtons from "../components/Users/RhGroupedButtons";
import "../index.scss";

export default {
  title: "Rh Grouped Button",
  component: RhGroupedButtons,
};

//  const [value, setValue] = React.useState('UNKNOWN');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

export const Initial = () => <RhGroupedButtons></RhGroupedButtons>;

export const Preselected = () => (
  <RhGroupedButtons
    onChange={action("onChange")}
    value={"POSITIVE"}
  ></RhGroupedButtons>
);

export const Clickable = () => (
  <RhGroupedButtons
    onChange={action("onChange")}
    value={"POSITIVE"}
    // onClick={action('Button clicked')}
  ></RhGroupedButtons>
);
