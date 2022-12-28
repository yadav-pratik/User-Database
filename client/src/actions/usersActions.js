import axios from 'axios'

export const startGetUsers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3400/api/user/list', {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            dispatch(setUsers(data))
        } catch (error) {
            alert(error)
        }
    }
}

const setUsers = (data) => {
    return {
        type : 'SET_USERS',
        payload : data
    }
}

export const startDeleteUser = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`http://localhost:3400/api/user/delete/${id}`, {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            alert("User Deleted Successfully!")
            dispatch(deleteUser(data._id))
        } catch (error) {
            alert(error)
        }
    }
}

const deleteUser = (id) => {
    return {
        type : 'DELETE_USER',
        payload : id
    }
}