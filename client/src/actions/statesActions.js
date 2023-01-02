import axios from 'axios'

export const startGetStates = (country) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://www.universal-tutorial.com/api/states/${country}`, {
                headers : {
                    Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ1ZWwxNTY1MEB4Y294Yy5jb20iLCJhcGlfdG9rZW4iOiJFYkstM3ZjWk1fN2lsRmRNVXRvbmRNODBLdWdzVm1JZmc3aEU5YnZ3eXU0R0lfa0NoMkxtRU9lb3RyMjViVE9jVm9RIn0sImV4cCI6MTY3MjcyMzM1N30.MQqSAkej0tLI-96VtHK7eH0Ej8retaVDKMiceTykdJM'
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