import React from "react"
import Modal from 'react-bootstrap/Modal'

const ModalImage = (props) => {
    const { handleImageToggle, image } = props

    return (
        <Modal show={true} onHide={handleImageToggle}>
            <Modal.Header closeButton>
                <Modal.Title>User's Picture</Modal.Title>
                
            </Modal.Header>
            
            <Modal.Body className="d-flex justify-content-center"> 
                <img
                    src={process.env.REACT_APP_IMAGE_PATH + image}
                    alt="user_image"
                    width="400px"
                />
            </Modal.Body>
        </Modal>
    )
}

export default ModalImage