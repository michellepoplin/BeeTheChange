import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

var ButtonStyle = {
  width: "60px"
};

var modal = document.getElementById('UserCoverModal');

window.onClick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function Usercard(props) {
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
        <Button style={ButtonStyle} onClick={document.getElementById('ProfilePicModal')}>Edit</Button>
      </Card.Body>
    </Card>

  );
}

export default Usercard;