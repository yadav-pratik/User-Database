import React, { useState } from "react"
import { useDispatch } from "react-redux"

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
        } else if(password.length < 8 || password.length > 128){
            errors.password = "Password must be between 8 and 128 characters"
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
        <div>
            <form onSubmit={handleSubmit}>
            <label>Enter your Login Id</label>
                <br/>
                <input
                    type="text"
                    value = {loginId}
                    name = "loginId"
                    onChange = {handleChange}
                    placeholder="Email Or Username"
                />
                {formErrors.loginId ? <p style={validationStyle}>{formErrors.loginId}</p> : <><br/><br/></>}
                <label>Enter your Password</label>
                <br/>
                <input
                    type="password"
                    value = {password}
                    name = "password"
                    onChange = {handleChange}
                />
                {formErrors.password ? <p style={validationStyle}>{formErrors.password}</p> : <><br/><br/></>}
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    )
}

export default Login