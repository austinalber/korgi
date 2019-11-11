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
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"; 
import TaskBar from "./components/TaskBar"; 
import TaskCard from "./components/TaskCard"; 

const App = () => {

  return (
    // Value set to true to allow user to navigate through pages. False will disable.
    <AuthContext.Provider value={true}>
    <Router>
      <div>
        <Navbar/>
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/discover" component={Discover} />
          <Route path="/login"  component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <PrivateRoute path="/search" component={Search} />
          <PrivateRoute path="/user-page" component={UserPage} />
          <PrivateRoute path="/task" component={TaskBar} />
          <PrivateRoute path="/memento" component={Memento} />
          <PrivateRoute path="/taskcard" component={TaskCard} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
