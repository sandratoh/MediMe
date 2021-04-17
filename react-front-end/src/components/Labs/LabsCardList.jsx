// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import LabCard from "./LabCard";

// Helpers
import { dataContext } from "../Provider/DataProvider";

export default function LabsCardList() {
  const { labRecords, labs, setLabRecordDetailId } = useContext(dataContext);

  const records = labRecords.map((record) => {
    const onSelect = () => setLabRecordDetailId(record.id);

    return (
      <LabCard
        key={record.id}
        className="list-items"
        date={record.date}
        type={record.type_of_test}
        value={record.lab_id}
        labs={labs}
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
