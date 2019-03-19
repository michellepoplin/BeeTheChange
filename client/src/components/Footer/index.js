import React from "react";
import "./Footer.scss";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from '../../../src/logo.svg';

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
          <img
              src={Logo}
              width="200"
              height="200"
              className="d-inline-block align-top footerLogo"
              alt="Bee The Change Logo"
            />
          </MDBCol>
          <MDBCol md="4">
          <MDBRow>
          
            </MDBRow>
            <MDBRow>
               <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Bee The Change
        </MDBContainer>
      </div>
      </MDBRow>
          </MDBCol>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled">
                <a href="#!" className={"footerLink"}>||  Home Page ||</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className={"footerLink"}>||  FAQ  ||</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className={"footerLink"}>||  Contact Us ||</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className={"footerLink"}>||  About The Team ||</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
   
    </MDBFooter>
  );
}

export default Footer;