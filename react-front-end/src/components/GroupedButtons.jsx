import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextButton from './TextButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function GroupedButtons(props) {
  const classes = useStyles();

  const buttonList = props.typeOfVisit.map((type) => {

    return 
    <TextButton
    key={type.id}
    selected={props.value === type.type_of_visit}

  >
    Disabled
  </TextButton>
  

  })

  return (


      <div className={classes.root}>
        <TextButton groupButtons>
          CLINC
        </TextButton>
        <TextButton groupButtons selected>
          HOSPITAL
        </TextButton>
        

      </div>

   
  );
}




{/* <TextButton 
        variant={props.selected ? "contained" : "outlined"} 
        color="primary" 
        selected={props.selected}>HOSPITAL
        </TextButton>

        <TextButton 
        variant={props.selected ? "contained" : "outlined"} 
        color="primary" 
        selected={props.selected}>
          CLINIC
        </TextButton> */}