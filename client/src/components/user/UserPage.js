import React, { useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { startGetUser } from '../../actions/userActions'

import UsersTable from './UsersTable'

const UserPage = (props) => {
    const dispatch = useDispatch()

    const user = useSelector((state)=> {
        return state.user
    })

    useEffect(()=>{
        dispatch(startGetUser())
    },[dispatch])
    return (
        <div>
            <h2>User Page</h2>
            {user.role === 'admin' ? (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr. no.</th>
                                    <th>Name.</th>
                                    <th>Mobile</th>
                                    <th>Email/Username</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        <h4>Name - {user.name}</h4>
                        <h4>Login Id - {user.loginId}</h4>
                        <h4>Mobile - {user.mobile}</h4>
                        <h4>Location - {user.city}, {user.state}, {user.country}</h4>
                    </div>
                )

               
            }
        </div>
    )
}

export default UserPage