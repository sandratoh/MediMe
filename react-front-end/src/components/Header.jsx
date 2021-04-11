import './Header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header(props) {

  return (
    <AppBar position="absolute" className='nav-bar'>
      <Toolbar>
        <Typography 
          variant="h6" 
          className='nav-bar--logo'
          onClick={props.onLogo}>
          MediMe
        </Typography>
        <IconButton 
          edge="end" 
          color="inherit" 
          aria-label="menu" 
          onClick={props.onMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
