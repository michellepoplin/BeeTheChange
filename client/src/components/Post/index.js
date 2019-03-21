import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
<<<<<<< HEAD
import {Component} from "react";
import './Post.scss'


=======
import './Post.scss';
>>>>>>> f1068dba5f5a77974a2c071d9bd3a69629c134cb

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
