// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import "./UserSummaryCard.scss";
import ruler from '../images/ruler.png'
import scale from '../images/body-scale.png'
import rh from '../images/blood-rh-positive.png'
import blood from '../images/blood-type-ab.png'

const useStyles = makeStyles((theme) => ({

  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(.0, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const users = [
  {
  
  first_name: "Rachel",
  last_name: "Greene",
  email: "rachel@email.com",
  password: "password",
  height_in_cm: 150,
  weight_in_lb: 120,
  blood_type: "O",
  rh_group: "POSITIVE"
  }
]


export default function UserSummary() {
  const classes = useStyles();


  return (
    <div className="summary--root" >
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          
        <Typography id="summary--title">{users[0].first_name} {users[0].last_name}</Typography>
         
      </AccordionSummary>
      <AccordionDetails >
        <div className={clsx(classes.column)}>
           
          <Typography id="summary--w-h-b-r" variant="caption">
            Height:
            <br />
          </Typography>
          <Typography>
            {users[0].height_in_cm}cm
          </Typography>
        
          <Typography id="summary--w-h-b-r" variant="caption">
            Weight:
            <br />
          </Typography>
          <Typography>
            {users[0].weight_in_lb}lbs
          </Typography>

        </div>
        <div className={clsx(classes.column)}>
          <Typography id="summary--w-h-b-r" variant="caption">
            Blood Type:
            <br />
            <img className='sum--icon' src={blood} />
          </Typography>
        </div>

        <Divider/>

        <div className={clsx(classes.column)}>
          <Typography id='summary--w-h-b-r' variant="caption">
            Rh Group:
            <br />
            <img className='sum--icon' src={rh} />
          </Typography>
        </div>

        </AccordionDetails>
        <Divider />
        <AccordionActions >
          <Button  size="small" color="primary">
            Edit
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}