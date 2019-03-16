import React from "react";
import "./Nav.scss";
import

  function Nav(props) {
    return (
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">
            BeeTheChange
        </div>
          <Nav.Item>
            <Nav.Link href="./auth/Login">Login/Sign-Up</Nav.Link>
          </Nav.Item>




          {props.children}
        </div>

        );
      }

      export default Nav;

