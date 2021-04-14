import { action } from "@storybook/addon-actions";
import CountButton2 from "../components/CountButton";
import "../index.scss";

export default {
  title: "Count",
  component: CountButton2,
};

export const Initial = () => (
  <CountButton2
  // clinical_visits={clinical_visits}
  // onChange={action("onChange")}
  ></CountButton2>
);