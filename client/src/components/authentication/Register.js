import React, { useState } from "react"

const Register = (props) => {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [loginId, setLoginId] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'name'){
            setName(e.target.value)
        } else if(name === 'mobile'){
            setMobile(e.target.value)
        } else if(name === 'loginId'){
            setLoginId(e.target.value)
        } else if(name === 'password'){
            setPassword(e.target.value)
        }
    }
    return (
        <div>
            <form>
                <label>Enter your Name</label>
                <br/>
                <input
                    type="text"
                    value = {name}
                    name = "name"
                    onChange = {handleChange}
                />
                <br/>
                <label>Enter your Mobile no.</label>
                <br/>
                <input
                    type="text"
                    value = {mobile}
                    name = "mobile"
                    onChange = {handleChange}
                />
                <br/>
                <label>Enter a Login Id</label>
                <br/>
                <input
                    type="text"
                    value = {loginId}
                    name = "loginId"
                    onChange = {handleChange}
                />
                <br/>
                <label>Enter a Password</label>
                <br/>
                <input
                    type="text"
                    value = {password}
                    name = "password"
                    onChange = {handleChange}
                />
                <br/>
                <select value={country} name = "country" onChange={handleChange}>
                    <option value = "">Select your Country</option>
                </select>
            </form>
        </div>
    )
}

export default Register