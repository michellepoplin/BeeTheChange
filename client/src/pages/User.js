import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Footer from "../components/Footer";


class User extends Component {
//   state = {

//   };

render() {
    return (
        <Wrapper>
            <Nav><h5>Find a Farm</h5></Nav>
            <Container>This is Text</Container>
            <Footer>This is more text</Footer>
        </Wrapper>
    )
}

}

export default User;