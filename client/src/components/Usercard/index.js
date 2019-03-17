import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


function Usercard(props) {
    return (
<Card style={{ width: '18rem' }}>
<Card.Body>
  <Image src="https://via.placeholder.com/250" roundedCircle />

    <Card.Title>Bob Farmer</Card.Title>
  </Card.Body>
</Card>

    );
}

export default Usercard;