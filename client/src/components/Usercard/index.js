import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Usercard.scss';
import Col from 'react-bootstrap/Col';



function Usercard(props) {
    return (

<Container className={"profilePicture"}>
<Col md={6}></Col>
<Col md={6}>
  <Image src="https://via.placeholder.com/250" roundedCircle />
  </Col>
</Container>


    );
}

export default Usercard;