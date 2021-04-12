import { action } from "@storybook/addon-actions";
import CardListItem from "../components/Labs/LabCard";

const lab_records = [
  {
    id: 1,
    user_id: 1,
    date: "2018-09-15T07:00:00.000Z",
    referral_doctor_id: 1,
    lab_id: 3,
    type_of_test: "XRAY",
  },
  {
    id: 2,
    user_id: 1,
    date: "2019-03-30T07:00:00.000Z",
    referral_doctor_id: 2,
    lab_id: 1,
    type_of_test: "BLOOD",
  },
];

export default {
  title: "Card",
  component: CardListItem,
};

export const Xray = () => (
  <CardListItem
    date={lab_records[0].date}
    type={lab_records[0].type_of_test}
    value={lab_records[0].lab_id}
    onClick={action("Card clicked")}
  ></CardListItem>
);

export const Blood = () => (
  <CardListItem
    date={lab_records[1].date}
    type={lab_records[1].type_of_test}
    value={lab_records[1].lab_id}
    onClick={action("Card clicked")}
  ></CardListItem>
);
