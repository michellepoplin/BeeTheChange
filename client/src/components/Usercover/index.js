import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import UserCoverModal from '../../components/Modals/UserCoverModal/';
import '../../components/Modals/UserCoverModal';


import './Usercover.scss'

var ButtonStyle = {
    width: "60px"
};


class UserCover extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div>
                <Image src="https://via.placeholder.com/800x400" fluid />
                <Button style={ButtonStyle} variant="primary" onClick={this.handleShow}>
                    Edit
                </Button>
                <UserCoverModal />
            </div>
        );
    }

}

export default UserCover;