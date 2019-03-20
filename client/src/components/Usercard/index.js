import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfilePicModal from '../../components/Modals/ProfilePicModal/';

var ButtonStyle = {
  width: "60px"
};

class Usercard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100" />
        <Button style={ButtonStyle}>Edit</Button>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button style={ButtonStyle} variant="primary" onClick={this.handleShow}>
            Edit
          </Button>
          <ProfilePicModal />
        </Card.Body>
      </Card>
    );
  }

}

export default Usercard;