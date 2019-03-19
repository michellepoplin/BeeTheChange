import React from "react";
import "./frontNav.scss";

function FrontNav(props) {
    return (
        <div className="nav">
        <div className="nav-header">
    <div className="nav-title">
      BeeTheChange
    </div>
  </div>
  <span></span>
  <span></span>
  <span></span>

  
  
        {props.children}
      </div>
      
    );
}

export default FrontNav;