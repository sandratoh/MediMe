// Libraries
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

// Material UI Compoennts
import AppBar from "@material-ui/core/AppBar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

// Helpers
import { dataContext } from "./Provider/DataProvider";

// Stylesheet
import "./Header.scss";

export default function Header() {
  const { menu, setMenu, users, userDetailId } = useContext(dataContext);

  const user = users.find((user) => user.id === userDetailId);

  const history = useHistory();

  const onClose = () => {
    history.goBack();
    return setMenu(false);
  };

  const iconByState = (menuState) => {
    if (menuState === false) {
      return (
        <Link to="/menu">
          <IconButton
            edge="end"
            // color="inherit"
            className="nav-bar--icon"
            aria-label="menu"
            onClick={() => setMenu(true)}
          >
            <MenuIcon />
          </IconButton>
        </Link>
      );
    } else {
      return <CloseIcon className="nav-bar--icon" onClick={onClose} />;
    }
  };

  return (
    <AppBar position="absolute" className="nav-bar">
      <Toolbar className="nav-bar--container">
        <Link to="/">
          <img className="nav-bar--logo" src={"/logo.png"} alt="logo" />
        </Link>
        {user && iconByState(menu)} {/* no menu access if not logged in*/}
      </Toolbar>
    </AppBar>
  );
}
