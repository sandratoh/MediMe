import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextButtonGroup from "../TextButtonGroup";

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

  return <div className={classes.root}>{clinicGroup}</div>;
};
