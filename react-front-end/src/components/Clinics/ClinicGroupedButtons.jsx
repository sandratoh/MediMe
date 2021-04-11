import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextButton from "../TextButton";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ClinicGroupedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextButton
        groupButtons
        selected={"CLINIC" === props.value}
        onClick={props.onClick}
      >
        CLINIC
      </TextButton>

      <TextButton
        groupButtons
        selected={"HOSPITAL" === props.value}
        onClick={props.onClick}
      >
        HOSPITAL
      </TextButton>
    </div>
  );
}
