import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import jsPDF from 'jspdf'

import { startGetUser } from '../../actions/userActions'
import { startDeleteUser } from '../../actions/usersActions'

import ModalForm from '../ModalForm'
import ModalImage from '../ModalImage'

const UserPage = (props) => {
    const [editToggle, setEditToggle] = useState(false)
    const [imageToggle, setImageToggle] = useState(false)
    const [idForModal, setIdForModal] = useState('')

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

    const generatePdf = () => {
        const doc = new jsPDF('p','px','a1')
        doc.html(document.getElementById('table'), {
            callback : (pdf)=> {
                const pageCount = doc.internal.getNumberOfPages()
                for(let i = 2; i <= pageCount; i++){
                    pdf.deletePage(i)
                }
                pdf.save('usersTable.pdf')
            }
        })
    }

    const handleEditToggle = (id) => {
        setIdForModal(id)
        setEditToggle(!editToggle)
    }

    const handleImageToggle = (id) => {
        setIdForModal(id)
        setImageToggle(!imageToggle)
    }   
 
    return (
        <div>
            <h2>User Page</h2>
            {user.role === 'admin' ? (
                    <div>
                        <button onClick={generatePdf}>Download .pdf</button>
                        <table id='table' className="table">
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
                                        <td><button onClick={()=>{handleImageToggle(user._id)}}>Show</button></td>
                                        <td>
                                            <button onClick={()=>{handleEditToggle(user._id)}}>Edit</button>
                                            <button onClick={()=>{handleDelete(user._id)}}>Delete</button>
                                            {editToggle && idForModal === user._id && <ModalForm handleEditToggle={handleEditToggle} {...user}/>}
                                            {imageToggle && idForModal === user._id && <ModalImage handleImageToggle={handleImageToggle} image={user.image}/>}
                                        </td>
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