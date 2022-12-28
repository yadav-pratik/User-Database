import axios from 'axios'

export const startRegisterUser = (formData, clearAndRedirect) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3400/api/user/register', formData, {
                headers : {
                    'Accept': 'application/json',
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

