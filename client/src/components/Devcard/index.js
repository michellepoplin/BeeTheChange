import React from "react";
import Container from 'react-bootstrap/Container';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Image from 'react-bootstrap/Image';
import './Devcard.scss'

function Devcard(props) {

    return (
      <Col md={12}>
        <div className={"devCard container"}>

<Row>
  <Image className={"devImage"} src={props.picture} roundedCircle />
  </Row>
  <Row>
    <h3 className={"devName"}>{props.title}</h3>
    </Row>
    <Row>
      <p className={"devAbout"}>{props.about}</p>
    </Row>
      <Row>
<<<<<<< HEAD
      <a href={props.github} ><i className="fab fa-github devLink"></i></a>  
      <a href={props.linkedin} ><i className="fab fa-linkedin devLink"></i></a>
 </Row>
</div>
</Col>
    );
=======
      <a href={props.github}><i class="fab fa-github"></i></a>
      
      <a href={props.linkedin}><i class="fab fa-linkedin"></i></a>
      </Row>
    </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
>>>>>>> 35d6b953f675b85920c0988461299e8c3064ece1
}

export default Devcard;

//about developer page