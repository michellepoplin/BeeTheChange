import React, { Component } from "react";
import Mainnav from "../components/Nav";
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
import Aboutuser from '../components/Aboutuser';
import Button from 'react-bootstrap/Button';


class User extends Component {
    //   state = {

    //   };


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
                            <Col md={6}>
                                <Postform />
                                <Post>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at quam eget magna malesuada vehicula et ac justo. Morbi sollicitudin consectetur purus eget ultricies. Vestibulum pellentesque augue eget ipsum posuere commodo. Pellentesque quis tellus justo. Proin egestas, massa quis placerat rhoncus, diam lorem malesuada lacus, id sodales est justo at ligula. Morbi sed interdum est, et lacinia ipsum. Aliquam condimentum lectus ante, consequat fermentum ligula pretium placerat. Vestibulum est augue, vulputate sit amet dapibus ut, sollicitudin nec justo. Etiam tempus, massa vel facilisis porttitor, ligula neque tempor enim, a ultrices nulla nisi eu est. Nunc sed diam fermentum massa ultricies rhoncus ac et tellus. Sed felis mauris, laoreet id risus at, consequat eleifend lorem. Etiam consequat eros nec lectus cursus, vitae feugiat orci porta.

Duis tristique at turpis eu iaculis. Mauris cursus porta urna ut faucibus. Donec ut sapien sit amet justo consequat eleifend. Maecenas consectetur nulla eget magna faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris consectetur ipsum quis convallis mollis. Nulla maximus condimentum tellus, nec ornare purus. In consectetur hendrerit scelerisque. Donec mollis scelerisque leo. Mauris tempor in nibh nec venenatis. Praesent ultricies est augue, quis convallis nunc iaculis quis. Curabitur tempus imperdiet tempus. Nullam ut aliquet ligula, non porta tortor. Aliquam tincidunt odio ac lorem pellentesque blandit.</Post>
                                <Post>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at quam eget magna malesuada vehicula et ac justo. Morbi sollicitudin consectetur purus eget ultricies. Vestibulum pellentesque augue eget ipsum posuere commodo. Pellentesque quis tellus justo. Proin egestas, massa quis placerat rhoncus, diam lorem malesuada lacus, id sodales est justo at ligula. Morbi sed interdum est, et lacinia ipsum. Aliquam condimentum lectus ante, consequat fermentum ligula pretium placerat. Vestibulum est augue, vulputate sit amet dapibus ut, sollicitudin nec justo. Etiam tempus, massa vel facilisis porttitor, ligula neque tempor enim, a ultrices nulla nisi eu est. Nunc sed diam fermentum massa ultricies rhoncus ac et tellus. Sed felis mauris, laoreet id risus at, consequat eleifend lorem. Etiam consequat eros nec lectus cursus, vitae feugiat orci porta.
Duis tristique at turpis eu iaculis. Mauris cursus porta urna ut faucibus. Donec ut sapien sit amet justo consequat eleifend. Maecenas consectetur nulla eget magna faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris consectetur ipsum quis convallis mollis. Nulla maximus condimentum tellus, nec ornare purus. In consectetur hendrerit scelerisque. Donec mollis scelerisque leo. Mauris tempor in nibh nec venenatis. Praesent ultricies est augue, quis convallis nunc iaculis quis. Curabitur tempus imperdiet tempus. Nullam ut aliquet ligula, non porta tortor. Aliquam tincidunt odio ac lorem pellentesque blandit.</Post>
                                <Post>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at quam eget magna malesuada vehicula et ac justo. Morbi sollicitudin consectetur purus eget ultricies. Vestibulum pellentesque augue eget ipsum posuere commodo. Pellentesque quis tellus justo. Proin egestas, massa quis placerat rhoncus, diam lorem malesuada lacus, id sodales est justo at ligula. Morbi sed interdum est, et lacinia ipsum. Aliquam condimentum lectus ante, consequat fermentum ligula pretium placerat. Vestibulum est augue, vulputate sit amet dapibus ut, sollicitudin nec justo. Etiam tempus, massa vel facilisis porttitor, ligula neque tempor enim, a ultrices nulla nisi eu est. Nunc sed diam fermentum massa ultricies rhoncus ac et tellus. Sed felis mauris, laoreet id risus at, consequat eleifend lorem. Etiam consequat eros nec lectus cursus, vitae feugiat orci porta.

Duis tristique at turpis eu iaculis. Mauris cursus porta urna ut faucibus. Donec ut sapien sit amet justo consequat eleifend. Maecenas consectetur nulla eget magna faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris consectetur ipsum quis convallis mollis. Nulla maximus condimentum tellus, nec ornare purus. In consectetur hendrerit scelerisque. Donec mollis scelerisque leo. Mauris tempor in nibh nec venenatis. Praesent ultricies est augue, quis convallis nunc iaculis quis. Curabitur tempus imperdiet tempus. Nullam ut aliquet ligula, non porta tortor. Aliquam tincidunt odio ac lorem pellentesque blandit.</Post>
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
        )
    }


}

export default User;