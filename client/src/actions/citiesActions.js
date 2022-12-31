import axios from 'axios'

export const startGetCities = (state) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
                headers : {
                    Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ1ZWwxNTY1MEB4Y294Yy5jb20iLCJhcGlfdG9rZW4iOiJFYkstM3ZjWk1fN2lsRmRNVXRvbmRNODBLdWdzVm1JZmc3aEU5YnZ3eXU0R0lfa0NoMkxtRU9lb3RyMjViVE9jVm9RIn0sImV4cCI6MTY3MjU3NjU0MX0.sThuDuZhEWY8UnYty0yQT4oouCcZpEIWVAKY4NJYXok'
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