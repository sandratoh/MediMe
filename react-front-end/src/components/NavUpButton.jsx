// Libraries
import { useState, useEffect } from 'react';

// Material UI Components
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';

// Stylesheet
import "./NavUpButton.scss"

export default function NavUpButton() {

  // Scroll position state
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const myButton = document.getElementById("button--navigate-up");
    
    const scrollFunction = () => {
      if (document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
    };

    window.onscroll = () => {
      scrollFunction();
      setOffset(window.pageYOffset)
    }
  }, [offset]);

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