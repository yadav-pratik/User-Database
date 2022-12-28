import axios from 'axios'

export const startGetStates = (country) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://www.universal-tutorial.com/api/states/${country}`, {
                headers : {
                    Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJsb3Jvd29tNzM0QHJhenV6LmNvbSIsImFwaV90b2tlbiI6InVvQkdQWDdVcWZRQU5ZcHlUYUIwLWthVGtnLXpsOFdiaG9jQ2paNXpHQUdBRFZZbkV5R0FPMFp3aXMzUjlUVnFqQU0ifSwiZXhwIjoxNjcyMzIwOTQzfQ.sXfbcuQHbGkd0Am_xvvTrKoNXkE2hj7HN-pbKfKW1Lk'
                }
            })
            dispatch(setStates(data))
        } catch (error) {
            alert(error)
        }
    }
}

const setStates = (data) => {
    return {
        type : 'SET_STATES',
        payload : data
    }
}