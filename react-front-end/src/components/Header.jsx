// Libraries
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

// Material UI Compoennts
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// Helpers
import { dataContext } from "./hooks/DataProvider";

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
            color="inherit"
            aria-label="menu"
            onClick={() => setMenu(true)}
          >
            <MenuIcon />
          </IconButton>
        </Link>
      );
    } else {
      return <CloseIcon onClick={onClose} />;
    }
  };

  return (
    <AppBar position="absolute" className="nav-bar">
      <Toolbar>
        <Typography
          variant="h6"
          className="nav-bar--logo"
          onClick={() => setMenu(false)}
        >
          <Link to="/">MediMe</Link>
        </Typography>
        {user && iconByState(menu)} {/* no menu access if not logged in*/}
      </Toolbar>
    </AppBar>
  );
}
