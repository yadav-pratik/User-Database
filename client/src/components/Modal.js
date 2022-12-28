import React from "react"
import Modal from 'react-bootstrap/Modal'

const ModalPopup = (props) => {
    const {handleEditToggle} = props
    return (
        <div>
            <Modal show={true}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                 */}
                <Modal.Body>
                    <form>
                        <input className=""/>
                    </form>
                    <button onClick={()=>{handleEditToggle()}}>Cancel</button>
                </Modal.Body>
            </Modal>
        </div>
        
       
    )
}

export default ModalPopup