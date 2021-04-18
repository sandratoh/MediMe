
import { makeStyles } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import "./NavUpButton.scss"
const accent = amber[400];

// import UpIcon from "../images/up-arrow.png";


export default function NavUpButton() {
  
const myButton = document.getElementById("button--navigate-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
const navUp = () => {
  document.documentElement.scrollTop = 0;
}

  return (
    <div id="button--navigate-up" >
      <Fab  onCLick={() => {navUp()}} id="nav--up-button" color='primary' aria-label="add">
        <UpIcon />
      </Fab>
      {/* <img  src={UpIcon} component="img" alt="button icon" /> */}
    </div>
  );
}