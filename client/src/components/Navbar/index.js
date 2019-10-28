// import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-logo" to="/">
//         Logo
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           {/* <li className="nav-item">
//             <Link
//               to="/"
//               className={
//                 window.location.pathname === "/" || window.location.pathname === "/about"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               About
//             </Link>
//           </li> */}
//           <li className="nav-item nav-left">
//             <Link
//               to="/discover"
//               className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
//             >
//               Explore
//             </Link>
//           </li>
//           <li className="nav-item nav-right">
//             <Link
//               to="/login"
//               className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
//             >
//               Log In
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import {Link} from 'react-router-dom'
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
    marginLeft: theme.spacing(2)

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
            <MenuIcon component={Link} to="About" />
          </IconButton>
          <Button component={Link} to="Discover">
            Explore
          </Button>
          <Button className={classes.Login} color="inherit" component={Link} to="login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar; 