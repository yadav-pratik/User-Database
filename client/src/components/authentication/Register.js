import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { startGetCountries } from "../../actions/countriesActions"
import { startGetStates } from "../../actions/statesActions"

const Register = (props) => {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [loginId, setLoginId] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')

    const dispatch = useDispatch()

    const countries = useSelector((state)=>{
        return state.countries
    })
    const states = useSelector((state)=>{
        return state.states
    })

    useEffect(()=>{
        dispatch(startGetCountries())
    },[])

    useEffect(()=>{
        if(country){
            dispatch(startGetStates(country))
        }
    },[country])

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
        } else if(name === 'country'){
            setCountry(e.target.value)
        } else if(name === 'state'){
            setState(e.target.value)
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
                    {countries.map(c => {
                        return <option 
                            key={c.country_short_name}
                            value={c.country_name}
                        >
                            {c.country_name}
                        </option>
                    })}
                </select>
                <br/>
                <select value={state} name = "state" onChange={handleChange}>
                    <option value = "">Select your State</option>
                    {states.map((s, i) => {
                        return <option 
                            key={i}
                            value={s.state_name}
                        >
                            {s.state_name}
                        </option>
                    })}
                </select>
            </form>
        </div>
    )
}

export default Register