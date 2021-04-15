// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Helpers
import { dataContext } from "../hooks/DataProvider";

// Components
import MedicationCard from "./MedicationCard";


// const medications = [
//   {
//   id: 4,
//   name: "Happy Drug",
//   nickname: "Smile All Day Drug",
//   user_id: 1,
//   prescribed_date: "2021-03-04T08:00:00.000Z",
//   pharmacy_id: 3,
//   prescribed_doctor_id: 4,
//   refills_remaining: 2,
//   instructions: "Ten times a day",
//   is_take_with_water: true,
//   is_take_with_food: false
//   },
//   {
//     id: 1,
//     name: "Warfarin",
//     nickname: "Blood Clots",
//     user_id: 1,
//     prescribed_date: "2021-01-15T08:00:00.000Z",
//     pharmacy_id: 1,
//     prescribed_doctor_id: 2,
//     refills_remaining: 3,
//     instructions: "Take once per day, with or without food.",
//     is_take_with_water: false,
//     is_take_with_food: true
//     }
//   ];

export default function MedicationCardList() {

  const { medications, setMedRecordDetail } = useContext(
    dataContext
  );

  const meds = medications.map((medication) => {
    const onSelect = () => setMedRecordDetail(medication.id);
    return (
      <Link to="/medications/view">
        <MedicationCard
          key={medication.id}
          className="list-items"
          date={medication.prescribed_date}
          nickName={medication.nickname}
          // type={visit.type_of_visit}
          value={medication.name}
          medications={medications}
          onClick={onSelect}
        />
      </Link>
    );
  });

  return (
    <ul>
      <Link to="/medications/view">{meds}</Link>
    </ul>
  );
}