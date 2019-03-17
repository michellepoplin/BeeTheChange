import React from "react";
import Container from 'react-bootstrap/Container';
import {Component} from "react";
// import Button from 'react-bootstrap/Button';



class Post extends Component {
    render() {
        return (
            <Container>
                {this.props.user} {this.props.message}
            </Container>
        );
    }
}

export default Post;