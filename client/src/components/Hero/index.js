import React from "react";
import "./style.css";

const Hero = (props) => 
    <div className="hero text-center" style={{ backgroundImage: `url(${src})` }}>
      {props.children}
    </div>

export default Hero;

