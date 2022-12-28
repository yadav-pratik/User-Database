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