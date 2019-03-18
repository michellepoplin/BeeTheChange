import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Usercard from '../components/Usercard';
import Usercover from "../components/Usercover";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tiers from '../components/Tiers';
import Container from 'react-bootstrap/Container';
import Post from '../components/Post';
import Postform from "../components/Postform";
import Followcard from '../components/Followcard';

class User extends Component {
    //   state = {

    //   };


    render() {
        return (
            <Wrapper>

                <Nav />
                <Usercover>
                    <Row>
                        <Col md={3}>
                        <Usercard />
                        </Col>
                        <Col md={6}></Col>
                        <Col md={3}>
                        <Followcard />
                            </Col>
                    </Row>
                </Usercover>
                <Grid fluid>
                    <Container divStyle={"margin-bottom: 50px;"}>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                        <Postform />
                        <Post>This is a Post</Post>
                        <Post>This is a Post</Post>
                        <Post>This is a Post</Post>
                        </Col>
                        <Col md={3}>\
                        <Tiers>This is a Tier</Tiers>
                        <Tiers>This is a Tier</Tiers>
                        <Tiers>This is a Tier</Tiers>
                        <Tiers>This is a Tier</Tiers></Col>
                    </Row>
                    
                    </Container>
                </Grid>
                <Footer />
            </Wrapper>
            
        )
    }


}

export default User;