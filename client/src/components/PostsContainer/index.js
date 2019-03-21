import React, { Component } from 'react';
import Post from "../Post";

class PostsContainer extends Component {
    render() {
        return (this.props.messages.map(message => (<Post key={message.id} user={message.user} message={message.message} />)));
    }
}

export default PostsContainer;
