import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.scss";
import Logo from '../../../src/logo.svg';

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4"></MDBCol>
          <MDBCol md="4">
            <MDBRow>
              <img
                src={Logo}
                width="200"
                height="200"
                className="d-inline-block align-top footerLogo"
                alt="Bee The Change Logo"
              />
            </MDBRow>
            <MDBRow>
              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Copyright: Bee The Change
                </MDBContainer>
              </div>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;
