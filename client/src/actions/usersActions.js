import axios from 'axios'

export const startGetUsers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3400/api/user/list', {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            console.log(data)
        } catch (error) {
            alert(error)
        }
    }
}