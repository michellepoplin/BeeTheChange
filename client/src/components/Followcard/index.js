import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';



function Followcard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Row>
                    <Button className={"beeButton followCardButt"}>Follow</Button>
                </Row>
                <Row>
                    <Button className="beeButton followCardButt">Message</Button>
                </Row>
            </Card.Body>
        </Card>

    );
}

export default Followcard;