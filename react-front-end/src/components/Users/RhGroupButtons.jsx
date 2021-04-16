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

export default function RhGroupedButtons(props) {
  const classes = useStyles();
  const rhGroupArray = [
    { id: 1, name: "POSITIVE" },
    { id: 2, name: "NEGATIVE" },
    { id: 3, name: "UNKNOWN" },
  ];

  const colorByStates = (validation, valueSelected) => {
    return validation && !valueSelected ? "secondary" : "primary"
  };

  const rhGroup = rhGroupArray.map((value) => {
    return (
      <TextButton
        key={value.id}
        color={colorByStates(props.validate, props.state)}
        setState={(event) => props.onChange(value.name)}
        groupButtons
        selected={value.name === props.value}
        value={value.name}
      >
        {value.name}
      </TextButton>
    );
  });

  return <div className={classes.root}>{rhGroup}</div>;
}
