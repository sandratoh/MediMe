import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextButton from "../TextButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ClinicGroupedButtons(props) {
  const classes = useStyles();
  const clinicGroupArray = [
    { id: 1, name: "HOSPITAL" },
    { id: 2, name: "CLINIC" }
    
  ];

  const clinicGroup = clinicGroupArray.map((value) => {
    return (
      <TextButton
        key={value.id}
        setState={(event) => props.onChange(value.name)}
        groupButtons
        selected={value.name === props.value}
        value={value.name}
      >
        {value.name}
      </TextButton>
    );
  });

  return <div className={classes.root}>{clinicGroup}</div>;
};
