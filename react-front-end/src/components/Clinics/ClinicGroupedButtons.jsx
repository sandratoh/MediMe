import React from "react";
import TextButtonGroup from "../TextButtonGroup";
import "./ClinicGroupedButtons.scss";

export default function ClinicGroupedButtons(props) {
  const clinicGroupArray = [
    { id: 1, name: "HOSPITAL" },
    { id: 2, name: "CLINIC" }
    
  ];

  const clinicGroup = clinicGroupArray.map((value) => {
    return (
      <TextButtonGroup
        color="primary"
        key={value.id}
        setState={(event) => props.onChange(value.name)}
        groupButtons
        selected={value.name === props.state}
        value={value.name}
      >
        {value.name}
      </TextButtonGroup>
    );
  });

  return <div className="grouped-buttons--container">{clinicGroup}</div>;
};
