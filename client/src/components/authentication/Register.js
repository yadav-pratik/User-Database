import React from "react"
import { useDispatch} from "react-redux"

import { startRegisterUser } from "../../actions/userActions"

import UserForm from "../reused/UserForm"

const Register = (props) => {

    const dispatch = useDispatch()

   const formSubmit = (formData, clearAndRedirect) => {
        dispatch(startRegisterUser(formData, clearAndRedirect))
   }

    return (
        <div>
            <h2>Register as a new Account</h2>
            < UserForm 
                formSubmit={formSubmit}
            />
            
        </div>
    )
}

export default Register