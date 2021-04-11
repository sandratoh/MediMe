import { action } from "@storybook/addon-actions";
import LabsDropdown from "../components/Labs/LabsDropdown";

export default {
  title: "Labs Dropdown",
  component: LabsDropdown,
};

export const RecordType = () => (
  <LabsDropdown onChange={action("onChange")}></LabsDropdown>
);
