import React from "react";
import Card from "../Card";

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

export default function ClinicsCardList(props) {
  const visits = clinical_visits.map((clinical_visit) => {
    return (
      <Card
        key={clinical_visit.id}
        className="list-items"
        date={clinical_visit.date}
        type={clinical_visit.type_of_visit}
        value={clinical_visit.clinic_id}
      />
    );
  });
  return <ul>{visits}</ul>;
}
