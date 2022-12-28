import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { startGetUser } from '../../actions/userActions'
import { startDeleteUser } from '../../actions/usersActions'

import Modal from '../Modal'

const UserPage = (props) => {
    const [editToggle, setEditToggle] = useState(false)

    const dispatch = useDispatch()

    const user = useSelector((state)=> {
        return state.user
    })

    const users = useSelector((state)=> {
        return state.users
    })

    useEffect(()=>{
        dispatch(startGetUser())
    },[dispatch])

    const handleDelete = (_id) => {
        dispatch(startDeleteUser(_id))
    }

    const handleEditToggle = (user) => {
        setEditToggle(!editToggle)
    }
 
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
                                {users.map((user, i) => {
                                    return <tr
                                        key={user._id}
                                    >
                                        <td>{i+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.loginId}</td>
                                        <td>show</td>
                                        <td>
                                            <button onClick={()=>{handleEditToggle(user)}}>Edit</button>
                                            <button onClick={()=>{handleDelete(user._id)}}>Delete</button>
                                        </td>
                                        {editToggle && <Modal handleEditToggle={handleEditToggle}/>}
                                    </tr>
                                })}
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