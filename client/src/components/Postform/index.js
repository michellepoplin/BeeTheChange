import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Postform.scss'

function Postform(props) {
    return (
<Container>
<Form className={'postForm'}>
<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className={"formLabel"}>Update your sponsors!</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <button className={"postButton"}>Post</button>
  </Form>
  </Container>

    );
}

export default Postform;