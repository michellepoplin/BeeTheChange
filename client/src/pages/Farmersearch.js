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
import Button from 'react-bootstrap/Button';

class Farmsearch extends Component {
    //   state = {

    //   };

    render() {
        return (
            <Wrapper>

                <Nav />
                <Grid fluid>
                    <Container>
                        <Row>
                            <Col xs={3}>
                                <Container>
                                    <Usercard />
                                </Container>
                            </Col>
                            <Col xs={6}>
                                <Container>
                                    <Usercover />
                                    <Container>
                                        <Postform />
                                    <Post>This is a Post</Post>
                                    <Post>This is a Post</Post>  
                                    <Post>This is a Post</Post>
                                    </Container>
                                </Container>
                            </Col>
                            <Col xs={3}>
                                <Container>
                                    <Button>Follow</Button>
                                    <Tiers />
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Grid>
                <Footer>This Will Be The Footer Routes</Footer>

            </Wrapper>
        )
    }

}

export default Farmsearch;