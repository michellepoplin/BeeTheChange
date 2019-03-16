import React from "react";
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';


function Post(props) {
    return (
<Container>{props.children}</Container>

    );
}

export default Post;