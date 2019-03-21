import React from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-flexbox-grid';
import "./Followcard.scss";

function Followcard() {
  return (
    <Container>
      <Col md={2}>
        <Row>
          <span className={"topSpan"}></span>
        </Row>
      </Col>
      <Col md={8}>
        <Row>
          <button className={"followCardButt"}>Follow</button>
        </Row>
        <Row>
          <button className={"followCardButt"}>Message</button>
        </Row>
      </Col>
      <Col md={2}></Col>
    </Container>
  );
}

export default Followcard;
