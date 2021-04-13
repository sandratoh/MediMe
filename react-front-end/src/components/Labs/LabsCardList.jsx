import { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../hooks/DataProvider";
import LabCard from "./LabCard";

export default function LabsCardList() {
  const { labRecords, labs, handleLabCardClick } = useContext(dataContext);

  const records = labRecords.map((record) => {
    return (
      <LabCard
        key={record.id}
        className="list-items"
        date={record.date}
        type={record.type_of_test}
        value={record.lab_id}
        onClick={() => handleLabCardClick(record.id)}
      />
    );
  });
  return (
    <ul>
      <Link to="/labs/view">{records}</Link>
    </ul>
  );
}
