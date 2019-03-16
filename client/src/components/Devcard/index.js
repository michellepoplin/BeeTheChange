import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import { Grid, Row, Col } from 'react-flexbox-grid';

function Devcard(props) {
    return (
        <Container>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://via.placeholder.com/100" />
  <Card.Body>
    <Card.Title>{props.children}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Container>
    );
}

export default Devcard;

//about developer page