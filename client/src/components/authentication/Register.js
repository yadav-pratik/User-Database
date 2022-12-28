import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { startGetCountries } from "../../actions/countriesActions"
import { startGetStates } from "../../actions/statesActions"
import { startGetCities } from "../../actions/citiesActions"
import { startRegisterUser } from "../../actions/userActions"

const Register = (props) => {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [loginId, setLoginId] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [formErrors, setFormErrors] = useState({})

    const errors = {}

    const dispatch = useDispatch()

    const validationStyle = {color : 'red', marginTop : '0px', marginBottom : '0px'}

    const countries = useSelector((state)=>{
        return state.countries
    })
    const states = useSelector((state)=>{
        return state.states
    })
    const cities = useSelector((state)=>{
        return state.cities
    })

    useEffect(()=>{
        dispatch(startGetCountries())
    },[])

    useEffect(()=>{
        if(country){
            dispatch(startGetStates(country))
        }
    },[country])

    useEffect(()=>{
        if(state){
            dispatch(startGetCities(state))
        }
    },[state])

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
        } else if(name === 'city'){
            setCity(e.target.value)
        } else if(name === 'description'){
            setDescription(e.target.value)
        } else if(name === 'image'){
            setImage(e.target.files[0])
        }
    }

    const runValidations = () => {
        if(name.length === 0) {
            errors.name = "Name cannot be empty"
        }

        if(mobile.length === 0) {
            errors.mobile = "Mobile Number cannot be empty"
        } else if(mobile.length < 10 || mobile.length > 10){
            errors.mobile = "Mobile Number should be of 10 digits"
        } else if(isNaN(mobile)) {
            errors.mobile = "Invalid Mobile Number"
        }

        if(loginId.length === 0) {
            errors.loginId = "Login Id cannot be empty"
        }

        if(password.length === 0) {
            errors.password = "Password cannot be empty"
        } else if(password.length < 8 || password.length > 128){
            errors.password = "Password must be between 8 and 128 characters"
        }

        if(country.length === 0) {
            errors.country = "You must select one Country"
        } else if(state.length === 0) {
            errors.state = "You must select one State"
        } else if(city.length === 0) {
            errors.city = "You must select one City"
        }

        // if(image.length === 0){
        //     errors.image = "You must select an image for Profile"
        // }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const clearAndRedirect = () => {
                setName('')
                setMobile('')
                setLoginId('')
                setPassword('')
                setCountry('')
                setState('')
                setCity('')
                setDescription('')
                setImage('')

                props.history.push('/login')
            }

            const formData = {
                name, mobile, loginId, password, country, state, city, description, image
            }

            dispatch(startRegisterUser(formData, clearAndRedirect))
            
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your Name</label>
                <br/>
                <input
                    type="text"
                    value = {name}
                    name = "name"
                    onChange = {handleChange}
                />
                {formErrors.name ? <p style={validationStyle}>{formErrors.name}</p> : <><br/><br/></>}
                <label>Enter your Mobile no.</label>
                <br/>
                <input
                    type="text"
                    value = {mobile}
                    name = "mobile"
                    onChange = {handleChange}
                />
                {formErrors.mobile ? <p style={validationStyle}>{formErrors.mobile}</p> : <><br/><br/></>}
                <label>Enter a Login Id</label>
                <br/>
                <input
                    type="text"
                    value = {loginId}
                    name = "loginId"
                    onChange = {handleChange}
                    placeholder="Email Or Username"
                />
                {formErrors.loginId ? <p style={validationStyle}>{formErrors.loginId}</p> : <><br/><br/></>}
                <label>Enter a Password</label>
                <br/>
                <input
                    type="password"
                    value = {password}
                    name = "password"
                    onChange = {handleChange}
                />
                {formErrors.password ? <p style={validationStyle}>{formErrors.password}</p> : <><br/><br/></>}
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
                {formErrors.country ? <p style={validationStyle}>{formErrors.country}</p> : <><br/><br/></>}
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
                {formErrors.state ? <p style={validationStyle}>{formErrors.state}</p> : <><br/><br/></>}
                <select value={city} name = "city" onChange={handleChange}>
                    <option value = "">Select your City</option>
                    {cities.map((c, i) => {
                        return <option 
                            key={i}
                            value={c.city_name}
                        >
                            {c.city_name}
                        </option>
                    })}
                </select>
                {formErrors.city ? <p style={validationStyle}>{formErrors.city}</p> : <><br/><br/></>}
                <label>Enter a Description</label>
                <br/>
                <textarea
                    value={description}
                    onChange={handleChange}
                    name="description"
                >
                </textarea>
                <br/><br/>
                <label>Select a Picture</label>
                <br/>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleChange}
                    name="image"
                />
                {formErrors.image ? <p style={validationStyle}>{formErrors.image}</p> : <><br/><br/></>}
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    )
}

export default Register