import React from "react";
import Card from 'react-bootstrap/Card';
import './Tiers.scss';
import Paypal from "../paypal/paypal";



function Tiers(props) {
  return (

    <Card className={"tierCard"}>
      <Card.Body>
        <Card.Title>{props.tierlevel}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.tierprice}</Card.Subtitle>
        <Card.Text>
          {props.tierdescription}
        </Card.Text>
        <Paypal/>
      </Card.Body>
    </Card>

  );
}

export default Tiers;

//donation tiers