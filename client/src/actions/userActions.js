import axios from 'axios'

export const startRegisterUser = (formData, clearAndRedirect) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3400/api/user/register', formData, {
                headers : {
                    'Accept': 'application/json',
                }
            })
            console.log(data)
        } catch (error) {
            alert(error)
        }
    }
}

