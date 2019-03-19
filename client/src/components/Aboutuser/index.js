import React from "react";
import Card from 'react-bootstrap/Card';
import './Aboutuser.scss'


function Aboutuser(props) {
    return (

<Card className={"aboutUser"}>
  <Card.Body>
    <Card.Title>About Me</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

);
}

export default Aboutuser;