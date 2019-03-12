import React from "react";
import "./Footer.scss";

function Footer(props) {
    return (
        <footer className="footer">
        {props.children}
      </footer>
      
    );
}

export default Footer;