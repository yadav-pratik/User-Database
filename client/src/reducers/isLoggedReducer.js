const initialIsLoggedValue = localStorage.getItem('token') ? true : false

const isLoggedReducer = (state = initialIsLoggedValue, action) => {
    switch(action.type) {
        default : {
            return state
        }
    }
}

export default isLoggedReducer