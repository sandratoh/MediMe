// Components
import DateInput from "../components/DateInput";

export default {
  title: "DateInput",
  component: DateInput,
};

export const Default = () => <DateInput id="date">Date of Visit</DateInput>;

export const Error = () => (
  <DateInput id="date" error validate required>
    Date of Visit
  </DateInput>
);
