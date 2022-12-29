import axios from 'axios'

import { startGetUsers } from './usersActions'

export const startRegisterUser = (formData, clearAndRedirect) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3400/api/user/register', formData, {
                headers : {
                    'Content-type' : 'multipart/form-data'
                }
            })
            if(data.hasOwnProperty('notice')){
                alert(data.notice)
            } else if(data.hasOwnProperty('errors') || data.hasOwnProperty('message')){
                alert(data.message)
            } else if(data.hasOwnProperty('success')){
                alert(data.success)
                clearAndRedirect()
            }
        } catch (error) {
            alert(error)
        }
    }
}

export const startLoginUser = (formData, clearAndRedirect) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3400/api/user/login', formData)
            if(data.hasOwnProperty('notice')){
                alert(data.notice)
            } else if(data.hasOwnProperty('errors') || data.hasOwnProperty('message')){
                alert(data.message)
            } else if(data.hasOwnProperty('token')) {
                localStorage.setItem('token', data.token)
                alert('Successfully Logged In')
                clearAndRedirect()
            }
        } catch (error) {
            alert(error)
        }
    }
}

export const startGetUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3400/api/user/account', {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            dispatch(startGetUsers())
            dispatch(setUser(data))
        } catch (error) {
            alert(error)
        }
    }
}

const setUser = (data) => {
    return {
        type : 'SET_USER',
        payload : data
    }
}

export const logoutUser = () => {
    return {
        type : 'LOGOUT_USER',
    }
}
