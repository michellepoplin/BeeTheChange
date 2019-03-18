import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files));

class UserCoverModal extends React.Component {
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
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
                </Button>

                <Modal id="UserCoverModal" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Your Profile Picture</Modal.Title>
                        <span onclick="document.getElementById('UserCoverModal').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="file" accept="image/*" id="file-input"></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

// export default UserCoverModal;
render(<UserCoverModal />);