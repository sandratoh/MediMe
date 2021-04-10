import { storiesOf } from "@storybook/react";
import { action }    from "@storybook/addon-actions";

import IconButton from "../../components/IconButton";
import '../../index.scss'


export default { 
  title: 'Clinic Visits/Button',
  component: IconButton,
 };

const Template = (args) => <IconButton {...args} />;

export const defaultButton = () => <IconButton />;

// storiesOf("Button", module)
//   .addParameters({
//     backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
//   })
//   .add("Base", () => <IconLabelButtons>Base</IconLabelButtons>)
//   .add("Confirm", () => <IconLabelButtons confirm>Confirm</IconLabelButtons>)
//   .add("Danger", () => <IconLabelButtons danger>Cancel</IconLabelButtons>)
//   .add("Clickable", () => (
//     <IconLabelButtons onClick={action("button-clicked")}>Clickable</IconLabelButtons>
//   ))
//   .add("Disabled", () => (
//     <IconLabelButtons disabled onClick={action("button-clicked")}>
//       Disabled
//     </IconLabelButtons>
//   ));