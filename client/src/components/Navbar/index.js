import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./style.css";
import track from "./track.png";

class Navbar extends Component {
    // May be unnecessary
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            // console.log("User is currently logged in.")
        }
            // console.log("User is not currently logged in.")
        if (nextProps.errors) {
            console.log(nextProps.errors);
        }
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/home");
    };
    
    render() {
        if(this.props.auth.isAuthenticated) {
            return(        
            <nav className="navbar">
            <img id="remove-image" src={track} alt="Main page" />
            <ul id="menu">
            <li>
                <Link to="/home"
                    className={
                        window.location.pathname === "/" || window.location.pathname === "/home"
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
            </li>
            <li style={{ float:"right" }}>
                <Link to="/home"
                    onClick={this.onLogoutClick}
                    className={
                        window.location.pathname === "/home"
                            ? "nav-link active"
                            : "nav-link"
                    }>
                    Log Out
                </Link>
            </li>
        </ul>
        </nav>
        )} else {
            return(
                <nav className="navbar">
                <img id="remove-image" src={track} alt="Main page" />
                <ul id="menu">
                <li>
                    <Link to="/home"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/home"
                                ? "nav-link active"
                                : "nav-link"
                        }>
                        Home
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
            </nav>   
            )

        }
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(withRouter(Navbar));
