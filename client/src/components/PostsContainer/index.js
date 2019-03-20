import Post from "../Post";
import React, { Component } from 'react';

class PostsContainer extends Component {
    render() {
        return (this.props.messages.map(message => (<Post key={message.id} user={message.user} message={message.message} />)));
    }
}

export default PostsContainer;