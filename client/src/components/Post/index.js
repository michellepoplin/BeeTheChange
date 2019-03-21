import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import './Post.scss';

class Post extends Component {
    render() {
        return (
            <Container className="post">
                {this.props.user} {this.props.message}
            </Container>
        );
    }
}

export default Post;
