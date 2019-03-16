
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { withAuth } from '@okta/okta-react';

// withAuth(class Home extends Component {
//     state = { authenticated: null };

//     checkAuthentication = async() => {
//         const authenticated = await this.props.auth.isAuthenticated();
//         if (authenticated !== this.state.authenticated) {
//             this.setState({ authenticated });
//         }
//     }

//     async componentDidMount() {
//         this.checkAuthentication();
//     }

//     async componentDidUpdate() {
//         this.checkAuthentication();
//     }

//     login = async() => {
//         this.props.auth.login('/');
//     }

//     logout= async() => {
//         this.props.auth.logout('/');
//     }

//     render() {
//         if (this.state.authenticated === null) return null;

//         const button = this.state.authenticated ?
//             <button onClick={this.logout}>Logout</button> :
//             <button onClick={this.login}>Login</button>;

//         return (
//             <div>
//                 {button}
//             </div>
//         );
//     }
// });

// export default withAuth;


import React, { Component } from "react";
import FrontNav from "../components/FrontNav";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from "../components/Slider/Slider";
// import SectionA from "../components/SectionA";
// import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
// import Container from "react-bootstrap/Container";
import Section from "react-bootstrap/Section";


class Home extends Component {
    render() {
        return (
            <Wrapper>
              <FrontNav />
                <Grid fluid>
                  <Section>
                    <Row>
                      <Col xs={12}>
                         {/* <Container> */}
                             <Slider />
                         {/* </Container> */}
                       </Col>
                    </Row>
                    </Section>
                </Grid>
            </Wrapper>
        )
    };
    };
    export default Home;
    

{/* <Wrapper> */}
     {/* <FrontNav /> */}
     {/* <Slider /> */}
    {/* <SectionA  /> */}
     {/* <Footer />  */}
{/* </Wrapper> */}