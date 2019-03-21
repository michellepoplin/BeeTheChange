import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';
import './Usercard.scss';
import {Row, Col} from 'react-bootstrap';
// import ProfilePicModal from '../../components/Modals/ProfilePicModal/';

import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Usercard.scss';
import {Row, Col} from 'react-bootstrap';
// import ProfilePicModal from '../../components/Modals/ProfilePicModal/';




function Usercard(props) {

    return (

<Container>
<Col md={6}></Col>
<Col md={6}>
<Row>
  <Image className={"profilePicture"} src="https://via.placeholder.com/250" roundedCircle />
  </Row>
  <Row><h3 className={"userHeader"}>Bob The Farmer</h3></Row>
  </Col>
</Container>

    
    )
};

export default Usercard;
