import React, { Component } from "react";
import Mainnav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Usercard from '../components/Usercard';
import Usercover from "../components/Usercover";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tiers from '../components/Tiers';
import Container from 'react-bootstrap/Container';
import PostsContainer from '../components/PostsContainer';
import Postform from "../components/Postform";
import Followcard from '../components/Followcard';
import Aboutuser from '../components/Aboutuser';
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
        // this.searchPuppies(this.state.search);
    };

    render() {
        return (
            <Wrapper>
                <Mainnav />
                <Usercover>
                    <Row>
                        <Col md={6}>
                            <Usercard />
                        </Col>
                        <Col md={3}></Col>
                        <Col md={3}>
                            <Followcard />
                        </Col>
                    </Row>
                </Usercover>
                <Grid fluid>
                    <Container divStyle={"margin-bottom: 50px;"}>
                        <Row>
                            <Col md={3}>
                                <Aboutuser />
                            </Col>
<<<<<<< HEAD
                                <Col xs={6}>
                                    <Container>
                                        <Container>
                                            <Postform />
                                            <PostsContainer messages={messages} />
                                        </Container>
                                    </Container>
=======
                            <Col md={3}>
                                <Tiers
                                tierlevel="Getting Started"
                                tierprice="5$"
                                tierdescription="Help pay for the care of the Bee's and get updates"
                                />
                                <Tiers
                                tierlevel="Help A Hive"
                                tierprice="10$"
                                tierdescription="Sponsor Bee care and get 1 bottle of honey"
                                />
                                <Tiers
                                tierlevel="Start A Hive"
                                tierprice="150$"
                                tierdescription="Start a hive, get 10% of the honey output every season"
                                />
>>>>>>> 3d726ef08a61bd5a8240352049f4274a7d75602b
                                </Col>
                                <Col md={3}>
                                    <Tiers
                                        tierlevel="Getting Started"
                                        tierprice="5$"
                                        tierdescription="Help pay for the care of the Bee's and get updates"
                                    />
                                    <Tiers
                                        tierlevel="Help A Hive"
                                        tierprice="10$"
                                        tierdescription="Sponsor Bee care and get 1 bottle of honey"
                                    />
                                    <Tiers
                                        tierlevel="Start A Hive"
                                        tierprice="150$"
                                        tierdescription="Start a hive, get 10% of the honey output every season"
                                    />
                                </Col>
                            
                        </Row>

                    </Container>
                </Grid>
                    <Footer />
            </Wrapper>
<<<<<<< HEAD

                )
            }
        }
        
=======
        )
    }


}

>>>>>>> 3d726ef08a61bd5a8240352049f4274a7d75602b
export default User;