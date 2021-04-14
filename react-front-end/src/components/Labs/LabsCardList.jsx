// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Helpers
import { dataContext } from "../hooks/DataProvider";

// Components
import LabCard from "./LabCard";

export default function LabsCardList() {
  const { labRecords, labs, setLabRecordsDetail } = useContext(dataContext);

  const records = labRecords.map((record) => {
    const onSelect = () => setLabRecordsDetail(record.id);

    return (
      <LabCard
        key={record.id}
        className="list-items"
        date={record.date}
        type={record.type_of_test}
        value={record.lab_id}
        onClick={onSelect}
      />
    );
  });
  return (
    <ul>
      <Link to="/labs/view">{records}</Link>
    </ul>
  );
}
