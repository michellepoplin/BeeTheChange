import React from "react";
import Card from 'react-bootstrap/Card';
import './Tiers.scss'


function Tiers(props) {
  return (

    <Card className={"tierCard"}>
      <Card.Body>
        <Card.Title>{props.tierlevel}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.tierprice}</Card.Subtitle>
        <Card.Text>
          {props.tierdescription}
        </Card.Text>
        <button className={"tierButt"}>Sponsor</button>
      </Card.Body>
    </Card>

  );
}

export default Tiers;

//donation tiers