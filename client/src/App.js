// Dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";

// Pages
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn/SignIn"; 
import SignUp from "./pages/SignUp/SignUp";
import UserPage from "./pages/UserPage/UserPage";
import Memento from "./pages/Memento"; 
import Profile from "./pages/Profile"; 

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"; 
import TaskCard from "./components/TaskCard"; 

const App = () => {

  return (
    // Value set to true to allow user to navigate through pages. False will disable.
    <AuthContext.Provider value={true}>
    <Router>
      <div>
        <Navbar/>
        <Wrapper>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user-page" component={UserPage} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login"  component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/memento" component={Memento} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/taskcard" component={TaskCard} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
