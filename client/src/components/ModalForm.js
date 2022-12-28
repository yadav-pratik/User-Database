import React from "react"
import Modal from 'react-bootstrap/Modal'
import { useDispatch } from "react-redux"

import { startUpdateUsers } from "../actions/usersActions"

import UserForm from "./reused/UserForm"

const ModalForm = (props) => {
    const { handleEditToggle, _id,  ...restProps } = props

    const dispatch = useDispatch()

    const formSubmit = (formData, clear, _id) => {
        dispatch(startUpdateUsers(formData, clear, _id))
    }

    return (
        <Modal show={true} onHide={handleEditToggle}>
            <Modal.Header closeButton>
                <Modal.Title>Edit selected User</Modal.Title>
                
            </Modal.Header>
            
            <Modal.Body> 
                <UserForm 
                    {...restProps}
                    _id = {_id}
                    formSubmit = {formSubmit}
                    handleEditToggle={handleEditToggle}
                />
                <button onClick={()=>{handleEditToggle()}}>Cancel</button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalForm