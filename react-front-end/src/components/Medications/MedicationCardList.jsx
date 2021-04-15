// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Helpers
import { dataContext } from "../hooks/DataProvider";

// Components
import MedicationCard from "./MedicationCard";

export default function MedicationCardList() {
  const { medications, setMedicationDetailId } = useContext(dataContext);

  const meds = medications.map((medication) => {
    const onSelect = () => setMedicationDetailId(medication.id);
    return (
      <Link to="/medications/view">
        <MedicationCard
          key={medication.id}
          className="list-items"
          date={medication.prescribed_date}
          nickName={medication.nickname}
          refills={medication.refills_remaining}
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
