import { action } from "@storybook/addon-actions";
import DateInput from "../components/DateInput";

export default { 
  title: 'DateInput',
  component: DateInput,
 };

 export const Default = () => (
  <DateInput
    id="date"
  >
    Date of Visit
  </DateInput>
);

export const Error = () => (
  <DateInput
    id="date"
    error
  >
    Date of Visit
  </DateInput>
);