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
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
    
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
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
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{users[0].first_name} {users[0].last_name}</Typography>
          </div>
          <div className={classes.column}>
          </div>
        </AccordionSummary>
        <AccordionDetails className='accord--detail--head'>
          {/* <div className={classes.column} /> */}
          <div className={clsx(classes.column)}>
            <div className="section--height">
              <Typography variant="caption">
                Height:
                <br />
                {users[0].height_in_cm}cm

              </Typography>
            </div>
            <div className="section--weight" >
              <Typography variant="caption">
                Weight:
                <br />
                {users[0].weight_in_lb}lbs

              </Typography>
            </div>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
          <div className="section--blood">
            <Typography variant="caption">
              Blood Type:
              <br />

              <img className='sum--icon' src={blood} />
            </Typography>
          </div>
          </div>
          <Divider/>
          <div className={clsx(classes.column, classes.helper)}>
          <div className="section--rh">
            <Typography variant="caption">
              Rh Group:
              <br />

              <img className='sum--icon' src={rh} />
            </Typography>
          </div>
          </div>

        </AccordionDetails>
        <Divider />
        <AccordionActions>
          
          <Button size="small" color="primary">
            Edit
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}