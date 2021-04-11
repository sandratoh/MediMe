import CardListItem from "../components/Card";

const clinical_visits = [
  {
    id: 1,
    user_id: 1,
    clinic_id: 3,
    referral_doctor_id: 2,
    date: "2018-09-09T07:00:00.000Z",
    type_of_visit: "HOSPITAL",
    reason_for_visit: "Stomach pain and vomit",
    doctor_diagnosis: "Food poisoning",
  },
  {
    id: 2,
    user_id: 1,
    clinic_id: 1,
    referral_doctor_id: 1,
    date: "2019-02-05T08:00:00.000Z",
    type_of_visit: "CLINIC",
    reason_for_visit: "Headache and fever",
    doctor_diagnosis: "Seasonal flu",
  },
];

const clinics = [
  {
    id: 1,
    name: "Dr. Dodek Wenner Family Practice",
  },
  {
    id: 2,
    name: "Dr. Howard Liang S.H. Inc.",
  },
  {
    id: 3,
    name: "Vancouver General Hospital",
  },
];

export default {
  title: "Card",
  comonent: CardListItem,
};

export const Hospital = () => (
  <CardListItem
    date={clinical_visits[0].date}
    type={clinical_visits[0].type_of_visit}
  >
    Vancouver General Hospital
  </CardListItem>
);

export const Clinic = () => (
  <CardListItem
    date={clinical_visits[1].date}
    type={clinical_visits[1].type_of_visit}
  >
    Olympic Village Green Clinic
  </CardListItem>
);
