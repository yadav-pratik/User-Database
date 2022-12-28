import axios from 'axios'

export const startGetCities = (state) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
                headers : {
                    Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJsb3Jvd29tNzM0QHJhenV6LmNvbSIsImFwaV90b2tlbiI6InVvQkdQWDdVcWZRQU5ZcHlUYUIwLWthVGtnLXpsOFdiaG9jQ2paNXpHQUdBRFZZbkV5R0FPMFp3aXMzUjlUVnFqQU0ifSwiZXhwIjoxNjcyMzIwOTQzfQ.sXfbcuQHbGkd0Am_xvvTrKoNXkE2hj7HN-pbKfKW1Lk'
                }
            })
            dispatch(setCities(data))
        } catch (error) {
            alert(error)
        }
    }
}

const setCities = (data) => {
    return {
        type : 'SET_CITIES',
        payload : data
    }
}