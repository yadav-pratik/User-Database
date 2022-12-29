import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { toggleIsLogged } from "../../actions/isLoggedActions"
import { startLoginUser } from "../../actions/userActions"

const Login = (props) => {
    const [loginId, setLoginId] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})

    const errors = {}

    const validationStyle = {color : 'red', marginTop : '0px', marginBottom : '0px'}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'loginId'){
            setLoginId(e.target.value)
        } else if(name === 'password'){
            setPassword(e.target.value)
        }
    }

    const runValidations = () => {

        if(loginId.length === 0) {
            errors.loginId = "Login Id cannot be empty"
        }

        if(password.length === 0) {
            errors.password = "Password cannot be empty"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const clearAndRedirect = () => {
                setLoginId('')
                setPassword('')
                dispatch(toggleIsLogged())
                props.history.push('/user-page')
            }

            const formData = {
                loginId, password
            }

            dispatch(startLoginUser(formData, clearAndRedirect))
            
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card bg-light mb-3" style={{width : '40vw', minWidth : '300px'}}>
                <div className="card-header"><h4>Login to Your Account</h4></div>
                <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <label>Enter your Login Id</label>
                        <br/>
                        <input
                            className="form-control"
                            type="text"
                            value = {loginId}
                            name = "loginId"
                            onChange = {handleChange}
                            placeholder="Email Or Username"
                        />
                        {formErrors.loginId ? <p style={validationStyle}>{formErrors.loginId}</p> : <br/>}
                        <label>Enter your Password</label>
                        <br/>
                        <input
                            className="form-control"
                            type="password"
                            value = {password}
                            name = "password"
                            onChange = {handleChange}
                        />
                        {formErrors.password ? <p style={validationStyle}>{formErrors.password}</p> : <br/>}
                        <input
                            className="btn btn-outline-primary"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login