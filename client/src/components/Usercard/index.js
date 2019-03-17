import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Usercard.scss'


function Usercard(props) {
    return (
<Card style={{ width: '18rem' }} className={"cardContainer"}>
<Card.Body>
  <Image src="https://via.placeholder.com/250" roundedCircle />

    <Card.Title><h3>Bob The Farmer</h3></Card.Title>
  </Card.Body>
</Card>

    );
}

export default Usercard;