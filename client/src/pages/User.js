import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Usercard from '../components/Usercard';
import Usercover from "../components/Usercover";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tiers from '../components/Tiers';
import Container from 'react-bootstrap/Container';
import PostsContainer from '../components/PostsContainer';
import Postform from "../components/Postform";
import Button from 'react-bootstrap/Button';

const messages = [
    {
        id: 'message11',
        user: 'Test User 1',
        message: 'Test Message 1',
    },
    {
        id: 'message12',
        user: 'Test User 2',
        message: 'Test Message 2',
    },
    {
        id: 'message13',
        user: 'Test User 3',
        message: 'Test Message 3',
    },
    {
        id: 'message14',
        user: 'Test User 4',
        message: 'Test Message 4',
    },
    {
        id: 'message15',
        user: 'Test User 5',
        message: 'Test Message 5',
    }
];

class User extends Component {
    state = {
        selectedPostId: null,
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchPuppies(this.state.search);
    };

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
                                    <PostsContainer messages={messages} />
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

export default User;