import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import './Usercover.scss'

var ButtonStyle = {
    width: "60px"
};

var modal = document.getElementById('UserCoverModal');

window.onClick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function Usercover(props) {
    return (
        <div>
            <Image src="https://via.placeholder.com/800x400" fluid />
            <Button style={ButtonStyle} variant="primary" onClick={this.handleShow}>
                Edit
            </Button>
        </div>


    );
}

export default Usercover;