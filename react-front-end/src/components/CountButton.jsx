// Libraries
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CountButton() {
  const classes = useStyles();
  const [count, setCount] = useState(1);

  return (
    <div className={classes.root}>
      <IconButton
        onClick={() => {
          setCount(Math.max(count - 1, 0));
        }}
      >
        <RemoveCircleIcon data-testid="minus-button"/>
      </IconButton>
      {count}
      <IconButton
        onClick={() => {
          setCount(count + 1, 5);
        }}
      >
        <AddCircleIcon data-testid="plus-button"/>
      </IconButton>
    </div>
  );
}
