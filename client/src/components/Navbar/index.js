import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PetsTwoToneIcon from '@material-ui/icons/PetsTwoTone';

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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" component={Link} to="about">
            <PetsTwoToneIcon />
          </IconButton>
          <Button component={Link} to="discover">
            Home
          </Button>
          <Button component={Link} to="task">
            Tasks
          </Button>
          <Button component={Link} to="user-page">
            My Page
          </Button>
          <Button component={Link} to="search">
            Find Friends
          </Button>
          <Button className={classes.Login} color="inherit" component={Link} to="login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar; 