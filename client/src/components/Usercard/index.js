import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Usercard.scss';
import {Row, Col} from 'react-bootstrap';



function Usercard(props) {
    return (

<Container className={"profilePicture"}>
<Col md={6}></Col>
<Col md={6}>
<Row>
  <Image src="https://via.placeholder.com/250" roundedCircle />
  </Row>
  <Row><h3 className={"userHeader"}>Bob The Farmer</h3></Row>
  </Col>
</Container>


    );
}

export default Usercard;