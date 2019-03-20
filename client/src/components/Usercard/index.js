import React from "react";
import Card from 'react-bootstrap/Card';
import ProfilePicModal from '../../components/Modals/ProfilePicModal/';


class Usercard extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100" />
        <ProfilePicModal />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

}

export default Usercard;