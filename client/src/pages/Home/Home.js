import React from "react";
import { Link } from 'react-router-dom';
import "./home-style.css";

const About = props => {
  return (
    <div className="parent-div">
      <div className="top-div">
        <p>Korgi</p>
        <p>Though she be but little, she is fearless</p>
      </div>
      <div className="bottom-div">
        <h3>Welcome!</h3>
        <p>
          Kor· gi - the word orginates from Wales, 
          a mystical land of foggy rolling hills and castles.

          In their Welsh language, it means little dog. 
          A breed attributed for their warmth, cleverness, and curosity. 

          Like the dog, this application is based on those same <Link to="discover" style={{ textDecoration: 'blank', color: 'black'}}>quirks</Link>. 
          We serve as a platform for little humans and the one inside all of us to express our own individuality
          without the need of words, but with objects. So bring your dog or borrow one and lets explore together. 
          Remember, it’s less of what we see but more of how we see things.
        </p>
        <Link to="/sign-up">
          <button className="join" type="button">Join</button>
        </Link>
      </div>
    </div>
  );
}

export default About;

// initial