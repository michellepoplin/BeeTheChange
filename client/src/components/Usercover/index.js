import React from "react";
import Image from 'react-bootstrap/Image';
import UserCoverModal from '../../components/Modals/UserCoverModal/';


import './Usercover.scss';


class UserCover extends React.Component {
    render() {
        return (
            <div>
                <Image src="https://via.placeholder.com/800x400" fluid />
                <UserCoverModal />
            </div>
        );
    }

}

export default UserCover;