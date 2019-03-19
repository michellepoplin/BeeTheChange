import React from "react";
import Card from 'react-bootstrap/Card';
import './Tiers.scss'


function Tiers(props) {
    return (

<Card className={"tierCard"}>
  <Card.Body>
    <Card.Title>Tier 1</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">5$</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   <button className={"tierButt"}>Sponsor</button>
  </Card.Body>
</Card>

);
}

export default Tiers;

//donation tiers