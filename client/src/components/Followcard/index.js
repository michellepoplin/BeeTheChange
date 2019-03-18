import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "./Followcard.scss";



function Followcard() {
    return (
        <Card className={"followCard cardContainer"}>
            <Card.Body>
                <Row>
                    <Button className={"beeButton followCardButt1"}>Follow</Button>
                </Row>
                <Row>
                    <Button className={"beeButton followCardButt2"}>Message</Button>
                </Row>
            </Card.Body>
        </Card>

    );
}

export default Followcard;