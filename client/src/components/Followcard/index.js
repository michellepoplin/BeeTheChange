import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "./Followcard.scss";



function Followcard() {
    return (
      <Container>
          <Row>
              <Button>Follow</Button>
          </Row>
          <Row>
              <Button>Message</Button>
          </Row>
      </Container>
    );
}

export default Followcard;