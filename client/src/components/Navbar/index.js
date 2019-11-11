import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import track from "./track.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img id="remove-image" src={track} alt="Main page" />
            <ul id="menu">
                <li>
                    <Link to="/about"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/about"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/task"
                        className={
                            window.location.pathname === "/task"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                        Tasks
                    </Link>
                </li>
                <li>
                    <Link to="/user-page"
                        className={
                            window.location.pathname === "/user-page"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                        My Page
                    </Link>
                </li>
                <li>
                    <Link to="/search"
                        className={
                            window.location.pathname === "/search"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                        Friend Seach
                    </Link>
                </li>
                <li>
                    <Link to="/memento"
                        className={
                            window.location.pathname === "/memento"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                        Memento
                    </Link>
                </li>
                <li>
                    <Link to="/taskcard"
                        className={
                            window.location.pathname === "/taskcard"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                        TaskCard
                    </Link>
                    <Link to="/profile"
                        className={
                            window.location.pathname === "/profile"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                        Profile
                    </Link>
                </li>
                <li style={{ float:"right" }}>
                    <Link to="/login"
                        className={
                            window.location.pathname === "/login"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                        Log In
                    </Link>
                </li>
            </ul>
            {/*<AppBar position="static">*/}
            {/*  <Toolbar>*/}
            {/*    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
            {/*      <MenuIcon component={Link} to="abossut" />*/}
            {/*    </IconButton>*/}
            {/*    <Button component={Link} to="discover">*/}
            {/*      Explore*/}
            {/*    </Button>*/}
            {/*    <Button component={Link} to="task">*/}
            {/*      Task*/}
            {/*    </Button>*/}
            {/*    <Button component={Link} to="user-page">*/}
            {/*      User Page*/}
            {/*    </Button>*/}
            {/*    <Button className={classes.Login} color="inherit" component={Link} to="login">Login</Button>*/}
            {/*  </Toolbar>*/}
            {/*</AppBar>*/}
        </nav>
    );
}

export default Navbar; 
