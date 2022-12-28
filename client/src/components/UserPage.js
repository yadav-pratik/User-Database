import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetUser } from '../actions/userActions'

const UserPage = (props) => {
    const dispatch = useDispatch()

    const user = useSelector((state)=> {
        return state.user
    })

    useEffect(()=>{
        dispatch(startGetUser())
    },[])
    return (
        <div>
            <h2>User Page</h2>
        </div>
    )
}

export default UserPage