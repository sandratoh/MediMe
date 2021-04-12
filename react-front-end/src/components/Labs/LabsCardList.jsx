import React from "react";
import Card2 from "./LabCard";

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

export default function LabsCardList(props) {
  const records = lab_records.map((lab_visit) => {
    return (
      <Card2
        key={lab_visit.id}
        className="list-items"
        date={lab_visit.date}
        type={lab_visit.type_of_test}
        value={lab_visit.lab_id}
      />
    );
  });
  return <ul>{records}</ul>;
}
