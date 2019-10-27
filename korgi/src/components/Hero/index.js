import React from "react";
import "./style.css";

const Hero = (props) => 
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>

export default Hero;
