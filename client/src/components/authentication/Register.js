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
            <div className="card bg-light mb-3" style={{width : '40vw', minWidth : '300px'}}>
            <div className="card-header"><h4>Register as a New Account</h4></div>
            <div className="card-body">
                < UserForm
                    formSubmit={formSubmit}
                />
            </div>
            </div>
        </div>
    )
}

export default Register