import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"

import { clearCountriesAndState, startGetCountries } from "../../actions/countriesActions"
import { startGetStates } from "../../actions/statesActions"
import { startGetCities } from "../../actions/citiesActions"

const UserForm = (props) => {
    const {
        _id,
        name : fullName,
        mobile : mobileNo,
        country : countryName,
        state : stateName,
        city : cityName,
        description : descr,
        formSubmit,
        handleEditToggle
    } = props

    const [name, setName] = useState( fullName ? fullName : '')
    const [mobile, setMobile] = useState(mobileNo ? mobileNo : '')
    const [loginId, setLoginId] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState(countryName ? countryName : '')
    const [state, setState] = useState(stateName ? stateName : '')
    const [city, setCity] = useState(cityName ? cityName : '')
    const [description, setDescription] = useState(descr ? descr : '')
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
    },[dispatch])

    useEffect(()=>{
        if(country){
            dispatch(startGetStates(country))
        }
    },[country, dispatch])

    useEffect(()=>{
        if(state){
            dispatch(startGetCities(state))
        }
    },[state, dispatch])

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

        if(!handleEditToggle){
            if(loginId.length === 0) {
                errors.loginId = "Login Id cannot be empty"
            }

            if(password.length === 0) {
                errors.password = "Password cannot be empty"
            } else if(password.length < 8 || password.length > 128){
                errors.password = "Password must be between 8 and 128 characters"
            }
        }

        if(country.length === 0) {
            errors.country = "You must select one Country"
        } else if(state.length === 0) {
            errors.state = "You must select one State"
        } else if(city.length === 0) {
            errors.city = "You must select one City"
        }

        if(!handleEditToggle){
            if(image.length === 0){
                errors.image = "You must select an image for Profile"
            }
        }
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

                dispatch(clearCountriesAndState())
                if(!handleEditToggle){
                    props.history.push('/')
                } else {
                    handleEditToggle()
                }
            }

            const formData = {
                name, mobile, loginId, password, country, state, city, description, image
            }

           formSubmit(formData, clearAndRedirect, _id)
            
        } else {
            setFormErrors(errors)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
                <label>Enter your Name</label>
                <br/>
                <input
                    className="form-control"
                    type="text"
                    value = {name}
                    name = "name"
                    onChange = {handleChange}
                />
                {formErrors.name ? <p style={validationStyle}>{formErrors.name}</p> : <br/>}
                <label>Enter your Mobile no.</label>
                <br/>
                <input
                    className="form-control"
                    type="text"
                    value = {mobile}
                    name = "mobile"
                    onChange = {handleChange}
                />
                {formErrors.mobile ? <p style={validationStyle}>{formErrors.mobile}</p> : <br/>}
                {!handleEditToggle && <>
                    <label>Enter a Login Id</label>
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
                    <label>Enter a Password</label>
                    <br/>
                    <input
                        className="form-control"
                        type="password"
                        value = {password}
                        name = "password"
                        onChange = {handleChange}
                        />
                    {formErrors.password ? <p style={validationStyle}>{formErrors.password}</p> : <br/>}
                </>}
                <select value={country} name = "country" onChange={handleChange} className="form-control">
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
                {formErrors.country ? <p style={validationStyle}>{formErrors.country}</p> : <br/>}
                <select value={state} name = "state" onChange={handleChange} className="form-control">
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
                {formErrors.state ? <p style={validationStyle}>{formErrors.state}</p> : <br/>}
                <select value={city} name = "city" onChange={handleChange} className="form-control">
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
                {formErrors.city ? <p style={validationStyle}>{formErrors.city}</p> : <br/>}
                <label>Enter a Description</label>
                <br/>
                <textarea
                    className="form-control"
                    value={description}
                    onChange={handleChange}
                    name="description"
                >
                </textarea>
                <br/>
                <label>Select a Picture</label>
                <br/>
                <input
                    className="form-control"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleChange}
                    name="image"
                />
                {formErrors.image ? <p style={validationStyle}>{formErrors.image}</p> : <br/>}
                <input
                    className="btn btn-outline-primary"
                    type="submit"
                    value="Submit"
                />
            </form>
    )
}

export default withRouter(UserForm)