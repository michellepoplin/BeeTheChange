import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Grid, Row, Col } from 'react-flexbox-grid';

function Devcard(props) {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={props.picture} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.about}
            <Row>
              <a href={props.github}><i class="fab fa-github"></i></a>

              <a href={props.linkedin}><i class="fab fa-linkedin"></i></a>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Devcard;

//about developer page