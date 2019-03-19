import React from "react";
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import './Post.scss'


function Post(props) {
    return (
        <Container className="post">
            <p>
                {props.children}
            </p>
        </Container>

    );
}

export default Post;