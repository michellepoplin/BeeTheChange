import React from "react";
import "./Nav.scss";

function Nav(props) {
    return (
        <nav className="navbar">
        {props.children}
      </nav>
      
    );
}

export default Nav;