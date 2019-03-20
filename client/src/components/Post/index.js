import React from "react";
import Container from 'react-bootstrap/Container';
import {Component} from "react";
// import Button from 'react-bootstrap/Button';
import './Post.scss'



class Post extends Component {
    render() {
        return (
            <Container className={"post"}>
                {this.props.user} {this.props.message}
            </Container>
        );
    }
}

export default Post;