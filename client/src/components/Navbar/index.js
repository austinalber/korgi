import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    Login: {
      marginLeft: theme.spacing(3)
    }
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon component={Link} to="about" />
          </IconButton>
          <Button component={Link} to="discover">
            Explore
          </Button>
          <Button component={Link} to="task">
            Task
          </Button>
          <Button component={Link} to="user-page">
            User Page
          </Button>
          <Button className={classes.Login} color="inherit" component={Link} to="login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar; 