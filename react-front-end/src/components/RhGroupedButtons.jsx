import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextButton from './TextButtonGroup';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function RhGroupedButtons(props) {
  const classes = useStyles();


  return (


      <div className={classes.root}>
        <TextButton 
        groupButtons
        selected={"POSITIVE" === props.value}
        // onClick={props.onClick}
        onChange={props.onChange}
        
        >
          POSITIVE
        </TextButton>

        <TextButton 
        groupButtons 
        selected={"NEGATIVE" === props.value}
        // onClick={props.onClick}
        onChange={props.onChange}
        >
          NEGATIVE
        </TextButton>

        <TextButton 
        groupButtons 
        selected={"UNKNOWN" === props.value}
        // onClick={props.onClick}
        onChange={props.onChange}
        >
          UNKNOWN
        </TextButton>
        

      </div>

   
  );
}
