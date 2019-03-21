import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';
import './Usercard.scss';
// import ProfilePicModal from '../../components/Modals/ProfilePicModal/';

class Usercard extends Component {
  render() {
    return (
      <Container className={"profilePictureContainer"}>
        <Col md={12}>
          <Row>
            <Image className={"profilePicture"} src={(this.props.user && this.props.user.Image) || 'https://via.placeholder.com/250'} roundedCircle />
            {/* <ProfilePicModal /> */}
          </Row>
          <Row><h3 className={"userHeader"}>{(this.props.user && this.props.user.Name) || ''}</h3></Row>
        </Col>
      </Container>
    );
  }
}

export default Usercard;
