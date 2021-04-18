// Libraries
import { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';

// Stylesheet
import "./NavUpButton.scss"

export default function NavUpButton() {
  // Timing to allow for button to load
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);
  
  const myButton = document.getElementById("button--navigate-up");

  window.onscroll = () => scrollFunction();

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 100) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  };

  const navOnButton = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id="button--navigate-up">
      <Fab onClick={() => navOnButton()} color='primary' aria-label="add">
        <UpIcon />
      </Fab>
    </div>
  );
}